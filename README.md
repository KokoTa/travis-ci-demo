# 持续集成测试库

[![Build Status](https://travis-ci.org/KokoTa/travis-ci-demo.svg?branch=master)](https://travis-ci.org/KokoTa/travis-ci-demo)
[![codecov](https://codecov.io/gh/KokoTa/travis-ci-demo/branch/master/graph/badge.svg)](https://codecov.io/gh/KokoTa/travis-ci-demo)

> 介绍了测试相关的内容：包括单元测试、覆盖率测试、集成测试、基准测试、UI测试

## 使用了什么？

* 断言：chai
* 测试：mocha
* 覆盖率：nyc / codecov
* 持续集成：travis-ci
* 关于 README 图标的获取：repo-badges
* 基准测试：banchmark.js / jsPerf
* UI测试：jest (可以测试 react / vue / node 等等，是一个集大成者)
* 无头浏览器：selenium-webdriver / puppeteer

## 关于 commit 提交

```bash
# <type>: (If applied, this commit will...) <subject> (Max 50 char)
# |<----  Using a Maximum Of 50 Characters  ---->|


# Explain why this change is being made
# |<----   Try To Limit Each Line to a Maximum Of 72 Characters   ---->|

# Provide links or keys to any relevant tickets, articles or other resources
# Example: Github issue #23

# --- COMMIT END ---
# Type can be
#    feat     (new feature)
#    fix      (bug fix)
#    refactor (refactoring production code)
#    style    (formatting, missing semi colons, etc; no code change)
#    docs     (changes to documentation)
#    test     (adding or refactoring tests; no production code change)
#    chore    (updating grunt tasks etc; no production code change)
#    deps     (dependencies)
# --------------------
# Remember to
#    Capitalize the subject line
#    Use the imperative mood in the subject line
#    Do not end the subject line with a period
#    Separate subject from body with a blank line
#    Use the body to explain what and why vs. how
#    Can use multiple lines with "-" for bullet points in body
# --------------------
# For more information about this template, check out
# https://gist.github.com/adeekshith/cd4c95a064977cdc6c50
```

## 番外：爬虫

反爬虫手段：

1. User-Agent 识别、Referer 试别、访问时添加验证码
2. 单位时间内访问次数和访问量限制
3. 关键信息图片混淆
4. 异步加载

常用的 node 爬虫技术：

1. SuperAgent + Cheerio ---> 会有反爬虫问题
2. puppeteer ---> 模拟浏览器运行，可以反反爬虫

爬虫示例见 crawler 文件夹
