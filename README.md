## 注意事項

2022/12/08 - by ossian

由於我在到職後，前一位設計師已經因為生產的關係離職，電腦中的檔案沒有進行交接及說明當時的建構環境。以至於我在接手後，有些檔案無法以預設的方式使用，目前發現的問題集中在 **SCSS 的編譯**，只能根據前人留下的檔案及使用的語法反推可能的建構方式。

由於我在 SCSS 檔中發現下面的語法

```scss
@import "compass/reset";
```

猜測前一位設計師是使用 **Ruby+SASS+Compass** 來建構搖滾火箭的專案，導致部分 SCSS 語法與原生 SCSS 不相容，也無法使用 VSCode+Live Sass Compiler 編譯。加上該專案已累積多頁，重新開發已不符合成本效益。在多方考慮及測試後，維持前人的開發方式是較為安妥的做法。在這個前提下，需要在電腦中安裝 **Ruby+SASS+Compass**，如果不熟悉的話，請參考下面的網路教學。

- [CSS開發工具 (Sass + Compass) 的環境安裝教學及基本操作](http://blog.shihshih.com/installing-the-sass-and-compass/)

其次，由於環境是猜測的關係，實際使用上還是會出現部分編譯錯誤的情況，如：

![](https://i.imgur.com/V5jWUxm.png)

只要根據報錯的內容找到並開啟相關的檔案即可逐項解決。以上圖為例，出現錯誤的地方在於 border-radius 無法編譯。解決方式只需要在 event.scss 版頭的地方加上如下的內容：

```scss
@import "compass/css3";
```

實測之後，使用上述的方式可以解決因為建構環境不明所產生的 SCSS 編譯問題。

---

## 使用方式

- 如前述，維護搖滾火箭的專案前請先安裝 Ruby、SASS 及 Compass。
- 在命令行的環境下開啟 **Start command Prompt with Ruby**
- 在命令列下，移到專案的指定目錄
- 在目錄下輸入下面指令

```ruby
compass watch
```

![](https://i.imgur.com/JAnOoyK.png)

出現 Compass is watching for changes. Press Ctrl-C to Stop. 訊息即表示成功監控專案

![](https://i.imgur.com/lkPDlyI.png)

如果要退出的話，請按 **Ctrl+C**


---


## 2022/12/09 - 新增一則隱私權頁面

  - privacy.html (尼莫最後選擇這頁)
  - cs_privacy.html