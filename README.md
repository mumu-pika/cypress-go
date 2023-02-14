# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


# Cypress
## setup
### 安装依赖
```bash
yarn add cypress -D
```
### 在package.json中配置命令
```json
# 配置端到端
"test:e2e": "cypress open"

#配置组件测试
"test:ct": "cypress open-ct"
```

### 提供了组件测试的方式
```bash
# 对于cypress @10.0及之前的版本需要安装配置
yarn add @cypress/vue@next @cypress/vite-dev-server --dev
```


