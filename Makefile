all: build

build:
	@./scripts/build.sh


release:
	@./scripts/build.sh -p

debug:
	@./scripts/build.sh -d

clean:
	@./scripts/clean.sh

state:
	@./scripts/new-state.sh $(NAME)
