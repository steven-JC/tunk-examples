module.exports = function(source) {
    source = source.replace(/@create[\w\W\n\r]*?class\s+(\w*).*\{/g, function($1, $2){
        console.log('__getName__', $2);
        return $1 + ' static __getName__(){return "' + $2 + '";}';
    });

    return source;
};