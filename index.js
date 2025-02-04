const currentTime = () => {
    const now = new Date();

    const year = now.getFullYear();
    const month = String(now.getMonth()).padStart(2, 0);
    const date = String(now.getDate()).padStart(2, 0);
    const day = [
        '日',
        '月',
        '火',
        '水',
        '木',
        '金',
        '土',
    ];
    const today = day[now.getDay()];
    const yearAndDays = `${year}年${month}月${date}日(${today})`
    document.getElementById('days').textContent = yearAndDays;

    const hour = now.getHours();
    const minute = String(now.getMinutes()).padStart(2, 0);
    const second = String(now.getSeconds()).padStart(2, 0);
    const time = `現在の時刻は${hour}時${minute}分${second}秒です。`;
    document.getElementById('showTime').textContent = time;
}

// 関数の呼び出し
setInterval(currentTime, 1000);