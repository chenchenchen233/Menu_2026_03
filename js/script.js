// script.js

// ===== 1. 页面加载淡入效果 =====
window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    // 初始透明
    [header, main, footer].forEach(el => el.style.opacity = 0);

    // 顺序淡入
    let delay = 0;
    [header, main, footer].forEach(el => {
        setTimeout(() => {
            el.style.transition = 'opacity 1s ease-in';
            el.style.opacity = 1;
        }, delay);
        delay += 500; // 每个元素间隔0.5秒出现
    });
});

// ===== 2. 菜单按钮点击缩放动画 =====
document.querySelectorAll('.menu-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // 点击时缩小动画
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
        // 可选：在新窗口打开菜单
        // const menuUrl = button.getAttribute('href');
        // window.open(menuUrl, '_blank', 'width=600,height=800');
    });
});

// // ===== 3. 背景轻微移动效果 =====
// const body = document.body;
// let bgPos = 0;

// function animateBackground() {
//     bgPos += 0.05; // 调整移动速度，数字越大越快
//     body.style.backgroundPosition = `center ${bgPos}px`;
//     requestAnimationFrame(animateBackground);
// }

//animateBackground();