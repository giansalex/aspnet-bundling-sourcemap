StackTrace.get()
    .then(console.log);

var app = {};

app.Id = 21;
app.action = action;
throw 3;
console.log(app.action());

function action() {
    return 2 + 8;
}

