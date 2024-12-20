# 程序名称
NAME = vessel_report_ui

# 主版本
VERSION ?= v0.0.1

# 版本构建目录
RELEASE_FOLDER := deploy


build: 
	npm i
	npm run build


container: build
	docker build -t nav-green/${NAME}:${VERSION} -f ${RELEASE_FOLDER}/Dockerfile .;


clean:
	-rm -rf ${DIST_FOLDER}
	-go clean
	-go clean -cache
	-docker rmi ${NAME}:${VERSION}
