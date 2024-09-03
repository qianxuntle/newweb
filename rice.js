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
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = dish;
        checkbox.id = dish;
        var label = document.createElement('label');
        label.htmlFor = dish;
        label.appendChild(document.createTextNode(dish));
        dishesDiv.appendChild(checkbox);
        dishesDiv.appendChild(label);
        // dishesDiv.appendChild(document.createElement('br'));
    });
}

function selectRandomDish() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var selectedDishes = Array.from(checkboxes).map(function (checkbox) {
        return checkbox.value;
    });

    if (selectedDishes.length === 0) {
        alert('请至少选择一个菜品！');
        return;
    }

    let intervalId; // 用于存储定时器的ID

    function getRandomName() {
        const randomIndex = Math.floor(Math.random() * selectedDishes.length); // 生成一个随机索引
        return selectedDishes[randomIndex]; // 返回随机选中的名字
    }

    function printRandomName() {
        const nameDiv = document.getElementById('sjcm'); // 获取div元素
        nameDiv.textContent = getRandomName(); // 设置div的文本内容为随机名字
    }

    function startRandomDishTimer() {
        printRandomName(); // 首先打印一个名字
        intervalId = setInterval(printRandomName, 50); // 每0.05秒打印一个新的名字
        setTimeout(() => {
            clearInterval(intervalId); // 5秒后停止定时器
        }, 5000);
    }

    startRandomDishTimer(); // 直接调用函数开始定时器
}

function selectAll() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
}

// 全不选的逻辑
function deselectAll() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
    }
}

function fanselectAll() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = !checkboxes[i].checked;
    }
}