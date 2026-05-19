document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter");
    const bgMusic = document.getElementById("bg-music");

    // Bắt sự kiện click mở phong bì
    envelope.addEventListener("click", () => {
        // Ẩn phong bì đi khi click
        envelope.style.display = "none";
        
        // Hiện bức thư ra
        letter.classList.remove("hidden");
        
        // Phát nhạc nền
        if (bgMusic) {
            bgMusic.volume = 0.5; // Âm lượng vừa phải
            bgMusic.play().catch(err => console.log("Trình duyệt chặn autoplay:", err));
        }

        // Gọi hiệu ứng cánh hoa rơi toàn màn hình
        createPetals();
        
        // Tạo một chút hiệu ứng scroll mượt mà xuống bức thư
        setTimeout(() => {
            letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    });

    // Hàm tạo hiệu ứng cánh hoa rơi (Falling Petals)
    function createPetals() {
        const colors = ['#ffb6c1', '#ffc0cb', '#f9e79f', '#fad7a1']; 
        
        for (let i = 0; i < 40; i++) {
            setTimeout(() => {
                const petal = document.createElement('div');
                petal.classList.add('petal');
                
                const size = Math.random() * 10 + 8;
                petal.style.width = `${size}px`;
                petal.style.height = `${size}px`;
                
                petal.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                petal.style.left = `${Math.random() * 100}vw`;
                
                const duration = Math.random() * 4 + 3;
                petal.style.animationDuration = `${duration}s`;
                
                document.body.appendChild(petal);
                
                setTimeout(() => {
                    petal.remove();
                }, duration * 1000);
            }, i * 150); 
        }
    }

    // --- HIỆU ỨNG BỤI KÝ ỨC / ĐỐM SÁNG RƠI LẢ TẢ ---
    function createMemoryDust() {
        const dustContainer = document.getElementById('dust-container');
        if (!dustContainer) return;

        // Tạo đốm sáng liên tục lặp lại
        setInterval(() => {
            const mote = document.createElement('div');
            mote.classList.add('memory-mote');
            
            // Kích thước ngẫu nhiên (từ 2px đến 6px) tạo cảm giác xa gần
            const size = Math.random() * 4 + 2;
            mote.style.width = `${size}px`;
            mote.style.height = `${size}px`;
            
            // Vị trí ngang ngẫu nhiên
            mote.style.left = `${Math.random() * 100}%`;
            
            // Thời gian trôi ngẫu nhiên (chậm rãi lãng mạn từ 5s đến 12s)
            const duration = Math.random() * 7 + 5;
            mote.style.animationDuration = `${duration}s`;
            
            // Lắc qua lại nhẹ nhàng (Sử dụng margin-left)
            const sway = (Math.random() - 0.5) * 50; 
            mote.style.marginLeft = `${sway}px`;

            dustContainer.appendChild(mote);
            
            // Tự động dọn dẹp bộ nhớ khi rơi xong
            setTimeout(() => {
                mote.remove();
            }, duration * 1000);
        }, 300); // Mỗi 300 mili-giây tạo ra 1 đốm sáng
    }

    // Gọi hiệu ứng bụi ký ức chạy luôn ngay khi tải trang
    createMemoryDust();
});