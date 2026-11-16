# Chrome 二维码生成器

一个简单易用的Chrome浏览器扩展，可以一键生成当前网页的二维码，方便手机扫码访问。

## 📋 功能特点

- 🚀 一键生成当前网页的二维码
- 📱 手机扫码即可访问
- 🎨 简洁美观的用户界面
- 📐 256x256高清二维码
- 🔧 高纠错级别，扫码更可靠
- 🔄 自动获取当前标签页URL

## 🚀 快速开始

### 环境要求

- Chrome浏览器（推荐最新版本）
- Windows / macOS / Linux 操作系统

### 安装步骤

#### 方法一：开发者模式加载（推荐）

1. **克隆或下载项目**
   ```bash
   git clone https://github.com/Lucian-Wang/Chrome-Qcode.git
   cd Chrome-Qcode/Qcode
   ```

2. **打开Chrome扩展管理页面**
   - 在Chrome地址栏输入：`chrome://extensions/`
   - 或者通过菜单：设置 → 扩展程序 → 管理扩展程序

3. **启用开发者模式**
   - 打开右上角的「开发者模式」开关

4. **加载扩展程序**
   - 点击「加载已解压的扩展程序」按钮
   - 选择仓库内包含 `manifest.json` 的 `Qcode/` 子目录
   - 扩展程序加载成功！

当前 README 不提供 Chrome Web Store 发布地址，按上述开发者模式加载即可。

## 📖 使用说明

### 基本使用

1. **打开任意网页**
   - 在Chrome浏览器中访问你想要生成二维码的网页

2. **点击扩展图标**
   - 在Chrome工具栏中找到「二维码生成器」图标
   - 点击图标打开弹出窗口

3. **查看二维码**
   - 弹出窗口会显示当前网页的URL
   - 下方会自动生成对应的二维码

4. **手机扫码**
   - 使用手机的相机或二维码扫描应用
   - 扫描屏幕上的二维码
   - 手机会自动打开对应的网页

## 📁 项目结构

```
Chrome-Qcode/Qcode/
├── manifest.json          # Chrome扩展配置文件
├── popup.html             # 弹出窗口HTML
├── popup.js               # 弹出窗口JavaScript逻辑
├── qrcode.min.js          # QRCode.js库文件
└── （README.md 位于仓库根目录）
```

## 🛠️ 技术栈

- **Chrome Extension API**: Chrome扩展开发
- **HTML5**: 弹出窗口界面
- **CSS3**: 样式设计
- **JavaScript**: 逻辑处理
- **QRCode.js**: 二维码生成库

## 🔧 配置说明

### manifest.json

主要配置项说明：

```json
{
  "manifest_version": 3,                    // 使用Chrome Manifest V3
  "name": "二维码生成器",                   // 扩展名称
  "version": "1.0.0",                      // 版本号
  "description": "一键生成当前网页的二维码", // 描述
  "permissions": ["activeTab"],             // 权限：获取当前活动标签页
  "action": {
    "default_popup": "popup.html"          // 默认弹出页面
  }
}
```

### 自定义二维码

你可以修改 `popup.js` 中的配置来自定义二维码：

```javascript
new QRCode(qrcodeContainer, {
  text: url,                    // 二维码内容
  width: 256,                   // 宽度（像素）
  height: 256,                  // 高度（像素）
  colorDark: '#000000',         // 深色
  colorLight: '#ffffff',        // 浅色
  correctLevel: QRCode.CorrectLevel.H  // 纠错级别
});
```

#### 纠错级别说明

- `QRCode.CorrectLevel.L` - 低（7%）
- `QRCode.CorrectLevel.M` - 中（15%）
- `QRCode.CorrectLevel.Q` - 较高（25%）
- `QRCode.CorrectLevel.H` - 高（30%）【默认】

## 🎨 自定义样式

你可以通过修改 `popup.html` 中的 `<style>` 标签来自定义界面样式：

```css
body {
  width: 320px;        /* 弹出窗口宽度 */
  background: #f5f5f5; /* 背景颜色 */
}
```

## 🐛 常见问题

### Q: 扩展程序无法加载？

**A:** 请确保：
- 已开启「开发者模式」
- 选择的文件夹包含 `manifest.json` 文件
- Chrome版本支持Manifest V3（Chrome 88+）

### Q: 二维码无法扫描？

**A:** 可能的原因：
- 确保二维码完整显示在屏幕上
- 手机摄像头对焦准确
- 光线充足
- 尝试增加二维码尺寸（修改width和height）

### Q: 如何更新扩展程序？

**A:** 
1. 修改代码后保存文件
2. 在 `chrome://extensions/` 页面找到扩展
3. 点击刷新按钮 🔄
4. 重新点击扩展图标使用

## 🔄 更新日志

### v1.0.0 (2026-04-05)

- ✨ 初始版本发布
- 🚀 支持一键生成当前网页二维码
- 🎨 简洁美观的用户界面
- 📱 256x256高清二维码

## 🤝 贡献指南

欢迎贡献代码、报告问题或提出建议！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

README 声明采用 MIT 许可证；当前仓库未包含独立 LICENSE 文件。

## 🙏 致谢

- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - 优秀的二维码生成库
- Chrome Extension 文档 - 官方开发文档

---

**如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！**

## 维护与反馈

维护者：[Lucian](https://lucian.wang/) · 邮箱：im@lucian.wang · [问题反馈](https://github.com/Lucian-Wang/Chrome-Qcode/issues)
