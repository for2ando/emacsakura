# Makefile for hidemacs/macro
INSTDIR=$(shell cygpath -u $(EMACSAKURA))
INSTFILES=*.js congetkey.*

ifndef EMACSAKURA
$(error Error: environment variable EMACSAKURA is empty.)
endif
install: $(INSTFILES)
	install --target-directory=$(INSTDIR) $^
