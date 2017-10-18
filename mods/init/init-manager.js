const fs = require('fs');

var InitManager = function () {
	this.defaultConfigPath = '/etc/nginx/nginx.conf';
};

// 默认的 nginx 配置文件是否存在
InitManager.prototype.nginxConfigExists = function () {
	const configPath = this.defaultConfigPath;
	return fs.existsSync(configPath);
};

module.exports = new InitManager();
