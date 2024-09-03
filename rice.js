var floors = {
    '一食堂': ['炒饭', '套餐饭', '石锅饭', '一楼麻辣烫', '面', '卤肉饭', '二楼麻辣烫'],
    '二食堂': ['豆花饭', '卤肉饭', '炒饭', '麻辣烫'],
    '三食堂': ['未知'],
    '四食堂': ['未知'],
    '全选': ['一食堂豆花饭', '一食堂炒饭', '套餐饭', '石锅饭', '一楼麻辣烫', '面', '一食堂卤肉饭', '二楼麻辣烫', '二食堂豆花饭', '二食堂卤肉饭', '二食堂炒饭', '二食堂麻辣烫', '未知']
};

function updateDishes(floor) {
    var dishesDiv = document.getElementById('cpxs');
    var dishes = floors[floor];

    // 清空之前的菜品
    dishesDiv.innerHTML = '';

    // 生成菜品列表
    dishes.forEach(function (dish) {
        var dishDiv = document.createElement('div');
        dishDiv.textContent = dish;
        dishDiv.className = 'dish-item';
        dishDiv.onclick = function () {
            this.classList.toggle('selected');
        };
        cpxs.appendChild(dishDiv);
    });
}

function selectRandomDish() {
    var selectedDishes = Array.from(document.querySelectorAll('.selected')).map(function (div) {
        return div.textContent;
    });

    if (selectedDishes.length === 0) {
        alert('请至少选择一个菜品！');
        return;
    }

    let intervalId; // 用于存储定时器的ID

    function printRandomName() {
        const nameDiv = document.getElementById('sjcm');
        const randomIndex = Math.floor(Math.random() * selectedDishes.length);
        nameDiv.textContent = selectedDishes[randomIndex];
    }

    function startRandomDishTimer() {
        printRandomName();
        intervalId = setInterval(printRandomName, 50);
        setTimeout(() => {
            clearInterval(intervalId);
        }, 5000);
    }

    startRandomDishTimer(); // 直接调用函数开始定时器
}

function selectAll() {
    var dishItems = document.querySelectorAll('.dish-item');
    dishItems.forEach(function (item) {
        item.classList.add('selected');
    });
}

// 全不选的逻辑
function deselectAll() {
    var dishItems = document.querySelectorAll('.dish-item');
    dishItems.forEach(function (item) {
        item.classList.remove('selected');
    });
}

function fanselectAll() {
    var dishItems = document.querySelectorAll('.dish-item');
    dishItems.forEach(function (item) {
        item.classList.toggle('selected');
    });
}

function enableScroll() {
    document.getElementById('cpxs').style.overflow = 'auto';
}

function disableScroll() {
    document.getElementById('cpxs').style.overflow = 'hidden';
}