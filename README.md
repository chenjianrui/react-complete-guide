我要把 React 學好。

這個單元了解到 state 與 props 的關係。

卡了一個早上的想法在這個課程的後面有解開了，是我想的太少

要改變相關的 array 與 object 的方法就是先淺拷貝 (...this.state)，別直接改變原先的 state 。

如果是 array 可利用 map 裡的參數 .map(data, index) ，index 抓取你要的那筆資料

這裡的實作用於抓到相關依的 user input ，去針對每一筆做 state 的改變，改變完後再把它塞回淺拷貝出來的 array 或 object 裡，然後再做更變 state
