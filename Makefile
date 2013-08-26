standalone.js:
	./compile index.js $@

build:
	component build --dev

.PHONY: standalone.js
