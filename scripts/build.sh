#!/bin/bash
PROGNAME=$0

BUILD=$(date +%s)

SRC_DIR="./src"
TMP_DIR="./tmp"
DIST_DIR="./dist"
PROD_DIR="$PWD/prod"

DIST_FRONT_DIR="${DIST_DIR}/htdocs/pages"
DIST_JS_DIR="${DIST_FRONT_DIR}/js"

DEBUG_FILE="${TMP_DIR}/main-debug.js"
TO_DOT_FILE="${TMP_DIR}/main-to-dot.js"

LANG_OUT="STABLE"
# LANG_OUT="ECMASCRIPT_2018"

COMPILER="$HOME/bin/closure-compiler.jar"

LOGINJS_FILE="${SRC_DIR}/public_htdocs/login.js"

[ X"$1" == X"-p" ] && DEBUG="FALSE" || DEBUG="TRUE"

usage() {
    printf "JS Compiler\n"
    printf "===========\n\n"
    printf "USAGE: %s [ OPTION ]\n\n" ${PROGNAME}
    printf "  -h        This page\n"
    printf "  -p        Compile Project removing DEBUG flag in JS code\n"
    printf "\n\n"
}

clean_dist() {
    printf "\tRunning $FUNCNAME...\n"
    rm -rf ${DIST_FRONT_DIR}
    mkdir -p ${DIST_FRONT_DIR}
    rm -rf ${TMP_DIR}
    mkdir -p ${TMP_DIR}
    mkdir -p ${DIST_JS_DIR}

}

merge_code() {
    printf "\tRunning $FUNCNAME...\n"
    # config.js
    if [ X"${DEBUG}" == X"FALSE" ]; then
        cat ${SRC_DIR}/js/config.js | sed 's/const DEBUG = true/const DEBUG = false/g' >>${DEBUG_FILE}
    else
        cat ${SRC_DIR}/js/config.js >>${DEBUG_FILE}
    fi
    printf "\n" >>${DEBUG_FILE}

    # functions.js
    cat ${SRC_DIR}/js/functions.js >>${DEBUG_FILE}
    printf "\n" >>${DEBUG_FILE}

    # globals.js
    cat ${SRC_DIR}/js/globals.js >>${DEBUG_FILE}
    printf "\n" >>${DEBUG_FILE}


    # States merging
    for path_file in $(find ${SRC_DIR}/js/states/ -name "state.js" | sort); do
        state_dir=$(echo $path_file | sed "s/\/state.js$//g")
        state_name=$(echo $state_dir | sed "s/.*\///g")
        state_file=$path_file
        presenter_file="$state_dir/presenter.js"
        model_file="$state_dir/model.js"
        view_file="$state_dir/view.js"
        head -n 1 $state_file >>${DEBUG_FILE}
        printf "\n" >>${DEBUG_FILE}
        cat $presenter_file >>${DEBUG_FILE}
        printf "\n" >>${DEBUG_FILE}
        cat $model_file >>${DEBUG_FILE}
        printf "\n" >>${DEBUG_FILE}
        cat $view_file >>${DEBUG_FILE}
        printf "\n" >>${DEBUG_FILE}
        mawk 'BEGIN {after=0} /\/\/\ DESC:/{after=1}{ if (after){print}}' $state_file >>${DEBUG_FILE}
    done

    # routes.js
    cat ${SRC_DIR}/js/routes.js >>${DEBUG_FILE}
    printf "\n" >>${DEBUG_FILE}

    # main.js
    cat ${SRC_DIR}/js/main.js >>${DEBUG_FILE}
    printf "\n" >>${DEBUG_FILE}
}

merge_to_dot() {
    printf "\tRunning $FUNCNAME...\n"
    for arquivo in $(find ${SRC_DIR} -name "*.js" | grep -v "main.js" | grep -v "extlibs" | sort); do
        file_name=$(echo ${arquivo} | sed "s/^.*\///g")
        if [ X"${file_name}" == X"config.js" -a X"${DEBUG}" == X"FALSE" ]; then
            cat ${arquivo} | sed 's/const DEBUG = true/const DEBUG = false/g' >>${TO_DOT_FILE}
            printf "\n" >>${TO_DOT_FILE}
        else
            cat ${arquivo} >>${TO_DOT_FILE}
            printf "\n" >>${TO_DOT_FILE}
        fi
    done
    cat ${SRC_DIR}/js/main.js >>${TO_DOT_FILE}
}

compile() {
    printf "\tRunning $FUNCNAME...\n"
    time java -jar $COMPILER -O ADVANCED_OPTIMIZATIONS --js ${DEBUG_FILE} --js_output_file ${TMP_DIR}/main-compiled.js --language_in ECMASCRIPT_2018 --language_out $LANG_OUT
    if [ $? -gt 0 ];then
    exit 1
    fi
}

compile_worker() {

    printf "\tRunning $FUNCNAME...\n"
    time java -jar $COMPILER -O ADVANCED_OPTIMIZATIONS --js ${SRC_DIR}/js/worker.js --js_output_file ${TMP_DIR}/worker.js --language_in ECMASCRIPT_2018 --language_out $LANG_OUT
}

fix_index() {
    printf "\tRunning $FUNCNAME...\n"
    sed -e "s/main.js/js\/main.$BUILD.js/g" \
        -e "s/style.css/css\/style.$BUILD.css/g" $SRC_DIR/index.html >$DIST_FRONT_DIR/index.html
}

copy_assets() {
    printf "\tRunning $FUNCNAME...\n"
    # mkdir -p ${DIST_FRONT_DIR}/font
    mkdir -p ${DIST_FRONT_DIR}/css
    mkdir -p ${DIST_FRONT_DIR}/api
    mkdir -p ${DIST_JS_DIR}

    #mkdir ${DIST_FRONT_DIR}/webfonts
    #mkdir ${DIST_FRONT_DIR}/extlibs
    #mkdir -p ${DIST_FRONT_DIR}/assets/img

    #cp ${SRC_DIR}/css/jodit.css $DIST_FRONT_DIR/css/
    #cp ${SRC_DIR}/css/print.css $DIST_FRONT_DIR/css/
    #cp ${SRC_DIR}/css/bootstrap.min.css $DIST_FRONT_DIR/css/
    #cp ${SRC_DIR}/webfonts/* $DIST_FRONT_DIR/webfonts
    #cp ${SRC_DIR}/extlibs/* $DIST_FRONT_DIR/extlibs
    #cp ${SRC_DIR}/assets/img/* $DIST_FRONT_DIR/assets/img/

    cp -v ${SRC_DIR}/favicon.ico $DIST_FRONT_DIR/favicon.ico
    cp -v ${SRC_DIR}/css/uikit.min.css $DIST_FRONT_DIR/css/
    cp -v ${SRC_DIR}/css/style.css $DIST_FRONT_DIR/css/style.${BUILD}.css

    cp -v ${SRC_DIR}/js/uikit.min.js $DIST_FRONT_DIR/js/
    cp -v ${SRC_DIR}/js/uikit-icons.min.js $DIST_FRONT_DIR/js/

    cp -v ${SRC_DIR}/api/db.json $DIST_FRONT_DIR/api/

    #cp -v ${SRC_DIR}/js/worker.js $DIST_FRONT_DIR/js/
    # cp -v ${TMP_DIR}/worker.js $DIST_FRONT_DIR/js/worker.js
    if [ X"$1" == X"-d" ]; then
        cp -v ${TMP_DIR}/main-debug.js $DIST_FRONT_DIR/js/main.${BUILD}.js
    else
        cp -v ${TMP_DIR}/main-compiled.js $DIST_FRONT_DIR/js/main.${BUILD}.js
    fi
}

copy_to_prod() {
    printf "\tRunning $FUNCNAME...\n"
    rm -rf ${PROD_DIR}
    cp -r ${DIST_FRONT_DIR}/ ${PROD_DIR}
}

generate_callgraph() {
    printf "\tRunning $FUNCNAME...\n"
    mawk -f ./scripts/generate_callgraph.awk ${TO_DOT_FILE} >>${TMP_DIR}/callgraph.dot
    dot ${TMP_DIR}/callgraph.dot -Tsvg -o ${TMP_DIR}/callgraph.svg
}

start_json_server() {
    ss -antup | mawk '/LIST.+8001/ {print}' | grep LIST >/dev/null 2>&1 ; CODE=$?
    [ ${CODE} -ne 0 ] && (printf "\tStarting JSON Server (PORT: 8001)\n" ; ./json-server-docker-run.sh ; sleep 2)
}

run_server() {
    printf "\tRunning $FUNCNAME...\n"
    cd $PROD_DIR
    python3 -m http.server
}

main() {
    #TODO: check_dependencies
    clean_dist
    merge_code
    #compile_worker
    if [ X"$1" != X"-d" ]; then
        compile
    fi
    fix_index
    copy_assets $1
    copy_to_prod
    merge_to_dot
    generate_callgraph
    # compile_login
    start_json_server
    run_server
}

[ X"$1" == X"-h" ] && usage || main $1
