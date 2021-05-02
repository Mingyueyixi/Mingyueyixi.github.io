# encoding=utf-8
import json
import os
import re

package_json = {
  "name": "mingyueyixi.github.io",
  "version": "0.0.0",
  "private": True,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "gulp server"
  },
  "dependencies": {
    "cookie-parser": "~1.4.3",
    "debug": "~2.6.9",
    "ejs": "~2.5.7",
    "express": "~4.16.0",
    "http-errors": "~1.6.2",
    "morgan": "~1.9.0"
  },
  "devDependencies": {
    "browser-sync": "^2.26.3",
    "gulp": "^4.0.0",
    "gulp-nodemon": "^2.4.2"
  }
}

f = open('package.json', 'w', encoding='utf-8')
json.dump(package_json, f, indent=2)
f.close()

ip_info = os.popen('ipconfig').read()
ip4 = re.search(r'IPv4.+:\s*(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})', ip_info).group(1)
port = 80

if __name__ == '__main__':
  os.system(f'start http://{ip4}:{port}/')
  os.system(f'python -m http.server {port}')
