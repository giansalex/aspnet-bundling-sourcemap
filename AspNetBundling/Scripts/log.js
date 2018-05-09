window.onerror = function (msg, url, line, col, error) {
    // Browser compatibility
    // https://blog.sentry.io/2016/01/04/client-javascript-reporting-window-onerror.html
    // https://blog.bugsnag.com/js-stacktraces/

    if (!url) {
        url = window.location.origin;
    }

    // Tener en cuenta que col & error son nuevos en la especificación HTML 5 y no pueden ser 
    // soportados en todos los navegadores. 
    var stackTrace = '';
    if (!error && !col) {
        stackTrace += msg + ' en ' + url + ' linea ' + line;
    } else {
        stackTrace = 'linea: ' + line + ', columna: ' + col + ', ' + error.stack;
    }

    if (msg === 'Script error.') {
        //Errores de JS externos
        return;
    }

    // TODO: Reportar el error a través de ajax para que pueda realizar un seguimiento
    // de qué páginas tienen problemas JS
    var objError = {
        Mensaje: msg,
        StackTrace: stackTrace,
        Url: url,
        Origen: 'Cliente',
        TipoTrace: 'ScriptError'
    };

    console.log(objError);
    // Si devuelve true, entonces las alertas de error (como en versiones anteriores de
    // Internet Explorer) se suprimirá.
    var callback = function(stackframes) {
        console.log(stackframes);

    };
    StackTrace.fromError(error).then(callback);

    return true;
};