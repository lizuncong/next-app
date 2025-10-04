## 环境

- node: 23

## 需要安装的 VSCode 插件

- ESLint
- Tailwind CSS IntelliSense
- i18n Ally
- Code Spell Checker

## 运行

- npm run dev

## Prisma

- 1. npm i prisma
- 2. npx prisma init --datasource-provider sqlite
- 3. 编写模型 Schema
- 4. 根据模型生成数据库表
- 5.更新：npx prisma db push && npx prisma generate

```bash
npx prisma db push
```

- 5.根据模型生成 Prisma Client 用于操作数据库

```bash
npx prisma generate
```
