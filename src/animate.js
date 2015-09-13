
var effectArray = ['bounceIn', 'fadeIn', 'lightSpeedIn', 'rotateIn', 'zoomIn', 'rollIn'];
var length = effectArray.length;

module.exports = function() {
    // 生成随机Key值
    var effectKey = Math.floor(Math.random() * length);
    return effectArray[effectKey] + ' animated';
};
