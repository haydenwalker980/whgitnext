BASEDIR=$(CURDIR)
PUBLICDIR=$(BASEDIR)/public
PORT=8000

serve:
	cd $(PUBLICDIR); python -m SimpleHTTPServer ${PORT}
