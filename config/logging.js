const getTimeStamp = () => {
    return new Date().toISOString()
}

exports.info = (namespace, message, object) => {
    if (object) {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`, object)
    } else {
        console.info(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`)
    }
}

exports.warn = (namespace, message, object) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`, object)
    } else {
        console.warn(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`)
    }
}

exports.error = (namespace, message, object) => {
    if (object) {
        console.error(`[${getTimeStamp()}] [ERR] [${namespace}] ${message}\n`, object)
    } else {
        console.error(`[${getTimeStamp()}] [ERR] [${namespace}] ${message}`)
    }
}

exports.debug = (namespace, message, object) => {
    if (object) {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`, object)
    } else {
        console.debug(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`)
    }
}
