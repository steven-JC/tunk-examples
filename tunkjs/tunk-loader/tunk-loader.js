module.exports = function(source) {
    const rpl = [];
    source.replace(/@create[\w\W\n\r]*?class\s(\w*?)[\s\n\r]*?\{/g, function($1, $2){
        rpl.push('\n' + $2 + '.__name__ = "' + $2 + '";');
        return $1;
    });
    console.log(rpl.join('\n'));
    return source + rpl.join('\n');
};