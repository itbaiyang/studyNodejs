/**
 * Created by baiyang on 2016/5/2.
 */
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");