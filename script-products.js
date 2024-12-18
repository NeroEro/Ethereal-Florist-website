  // Data produk lainnya
    // Data produk lainnya
    const otherProducts = [
        { 
            name: "Orchid Elegance", 
            image: "products/product1.jpg", 
            price: 100000, 
            description: "Stunning orchids arranged in a sleek and stylish vase." 
        },
        { 
            name: "Radiant Daisy", 
            image: "products/product2.jpeg", 
            price: 180000, 
            description: "vibrant bouquet of cheerful daisies to brighten up any day." 
        },
        { 
            name: "Lavender Peony", 
            image: "products/product3.jpeg", 
            price: 160000, 
            description: "Soft lavender peonies that embody romance and tranquility." 
        },
        { 
            name: "Crimson Rose", 
            image: "products/product4.jpg", 
            price: 120000, 
            description: "Deep red roses wrapped in a bold black ribbon, undying love." 
        },
        { 
            name: "Twilight Tulip", 
            image: "products/product5.jpg", 
            price: 220000, 
            description: "A dreamy mix of purple and pastel tulips to bring the beauty." 
        },
        { 
            name: "Scarlet Lily", 
            image: "products/product6.jpg", 
            price: 240000, 
            description: "A sophisticated arrangement of scarlet lilies, artfully wrapped." 
        },
        { 
            name: "Velvet Passion", 
            image: "products/product7.jpg", 
            price: 100000, 
            description: "Deep red roses wrapped in White for a dramatic,elegant touch." 
        },
        { 
            name: "Golden Meadow", 
            image: "products/product8.jpg", 
            price: 180000, 
            description: "A pastel bouquet with soft blooms and a natural, rustic feel." 
        },
        { 
            name: "Blush Blossom", 
            image: "products/product9.jpg", 
            price: 160000, 
            description: "Light pink roses wrapped softly for a sweet, delicate look." 
        },
        { 
            name: "Ruby Heart", 
            image: "products/product10.jpg", 
            price: 120000, 
            description: "Cright red roses with tiny white accents, symbolizing love." 
        },
        { 
            name: "Bloom Symphony", 
            image: "products/product11.jpg", 
            price: 220000, 
            description: "Soft pink and blue flowers arranged for a graceful, romantic vibe." 
        },
        { 
            name: "Coral Petal Basket", 
            image: "products/product12.jpg", 
            price: 240000, 
            description: "A basket of peach and coral flowers, warm and cheerful." 
        },
        { 
            name: "Eternal Floral Tribute", 
            image: "products/product13.jpg", 
            price: 240000, 
            description: "White blooms with greenery,for formal events or tributes." 
        },
        { 
            name: "Pure White Elegance", 
            image: "products/product14.jpg", 
            price: 240000, 
            description: "White roses and lilies, symbolizing purity, peace, and simplicity." 
        },
        // Tambahkan deskripsi untuk produk lainnya juga...
    ];
    
    // Menambahkan produk lainnya ke halaman
    const otherProductGrid = document.getElementById('other-product-grid');
    otherProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card-small');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rp ${product.price.toLocaleString()}</p>
            <p>${product.description}</p>
        `;
        otherProductGrid.appendChild(productCard);
    });
    
          // Data Produk
          const products = [
                { 
                    name: "Crimson Rose",
                    price: "Rp 120.000", 
                    image: "products/product4.jpg",
                    description: "Bouquet bunga mawar merah yang cantik dan elegan.",
                    shipping: "Pengiriman tersedia untuk area Jabodetabek.",
                    notes: "Bunga dapat diganti sesuai ketersediaan musim."
                },
                { 
                    name: "Twilight Tulip", 
                    price: "Rp 220.000",
                    image: "products/product5.jpg",
                    description: "Rangkaian bunga lily putih yang mewah.",
                    shipping: "Pengiriman tersedia untuk seluruh Indonesia.",
                    notes: "Bunga lily segar dengan kualitas terbaik."
                },
                { 
                    name: "Eternal Floral Tribute", 
                    price: "Rp 240.000",
                    image: "products/product13.jpg",
                    description: "Keranjang bunga matahari yang ceria dan penuh semangat.",
                    shipping: "Pengiriman dilakukan dalam waktu 1-2 hari.",
                    notes: "Bunga matahari segar dari kebun pilihan."
                },
                { 
                    name: "Pure White Elegance", 
                    price: "Rp 240.000",
                    image: "products/product14.jpg",
                    description: "Rangkaian anggrek ungu yang anggun dan menawan.",
                    shipping: "Tersedia pengiriman ke seluruh kota besar.",
                    notes: "Anggrek dalam vas keramik hitam elegan."
                }
            ];
    
            // Load Produk
            const productGrid = document.getElementById('product-grid');
            products.forEach((product, index) => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                `;
                productCard.addEventListener('click', () => openModal(index));
                productGrid.appendChild(productCard);
            });
    
            // Modal
            const modal = document.getElementById('productModal');
            const modalImage = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalPrice = document.getElementById('modalPrice');
            const descriptionContent = document.getElementById('descriptionContent');
            const shippingContent = document.getElementById('shippingContent');
            const notesContent = document.getElementById('notesContent');
            const closeModalBtn = document.getElementById('closeModal');
    
            function openModal(index) {
                const product = products[index];
                modalImage.src = product.image;
                modalTitle.textContent = product.name;
                modalPrice.textContent = product.price;
                descriptionContent.textContent = product.description;
                shippingContent.textContent = product.shipping;
                notesContent.textContent = product.notes;
    
                modal.style.display = 'flex';
            }
    
            closeModalBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
    
            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
    
            // Tab Navigasi
            const tabButtons = document.querySelectorAll('.tab-btn');
            const tabContents = document.querySelectorAll('.tab-content');
    
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('active'));
    
                    button.classList.add('active');
                    document.getElementById(button.dataset.tab).classList.add('active');
                });
            });
                    // Inisialisasi SwiperJS untuk promo banner
        const swiper = new Swiper('.promo-slider', {
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        // ini animasi foooter
        const canvas = document.querySelector('.animated-background');
        const ctx = canvas.getContext('2d');
        let width, height, particles;

        function init() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = document.querySelector('footer').offsetHeight;
            particles = [];
            for (let i = 0; i < 100; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 3 + 1,
                    speedX: (Math.random() - 0.5) * 2,
                    speedY: (Math.random() - 0.5) * 2
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.x += p.speedX;
                p.y += p.speedY;

                if (p.x < 0 || p.x > width) p.speedX *= -1;
                if (p.y < 0 || p.y > height) p.speedY *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(224, 113, 8, 0.6)';
                ctx.fill();
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', init);
        init();
        animate();
        function toggleChatbox() {
          const chatbox = document.getElementById("chatbox");
          const feedbackIcon = document.querySelector(".feedback-icon");
        
          if (!chatbox || !feedbackIcon) return; // Cegah error jika elemen tidak ditemukan
        
          if (chatbox.classList.contains("open")) {
            chatbox.classList.remove("open");
            setTimeout(() => {
              chatbox.style.display = "none";
              feedbackIcon.classList.remove("hidden"); // Tampilkan ikon feedback kembali
            }, 300); // Sesuaikan dengan durasi animasi CSS
            document.removeEventListener("click", handleOutsideClick);
          } else {
            chatbox.style.display = "flex";
            feedbackIcon.classList.add("hidden");
            setTimeout(() => {
              chatbox.classList.add("open");
            }, 10);
        
            function updateTime() {
              const timeElement = document.getElementById('chatbox-time');
              if (!timeElement) return;
        
              const now = new Date();
              const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
              const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        
              const day = days[now.getDay()];
              const date = now.getDate();
              const month = months[now.getMonth()];
        
              timeElement.textContent = `${day}, ${date} ${month}`;
            }
        
            updateTime();
        
            // Tampilkan animasi mengetik
            const typingIndicator = document.getElementById("typing-indicator");
            const chatboxContent = document.getElementById("chatbox-content");
            if (typingIndicator && chatboxContent) {
              typingIndicator.style.display = "flex";
              chatboxContent.style.display = "none";
        
              setTimeout(() => {
                typingIndicator.style.display = "none";
                chatboxContent.style.display = "block";
                simulateTyping("Haloo!!! 👋 Selamat Datang Di ETHEREAL FLORIST Ada Yang Bisa Saya Bantu?");
              }, 2000); // Durasi animasi "sedang mengetik"
            }
        
            document.addEventListener("click", handleOutsideClick);
          }
        }
        
        function handleOutsideClick(event) {
          const chatbox = document.getElementById("chatbox");
          const feedbackIcon = document.querySelector(".feedback-icon");
        
          if (!chatbox.contains(event.target) && !feedbackIcon.contains(event.target)) {
            toggleChatbox();
          }
        }
        
        function simulateTyping(text) {
          const dynamicText = document.getElementById("dynamic-text");
          if (!dynamicText) return;
        
          dynamicText.textContent = ""; // Hapus teks sebelumnya
          let index = 0;
        
          const interval = setInterval(() => {
            if (index < text.length) {
              dynamicText.textContent += text.charAt(index);
              index++;
            } else {
              clearInterval(interval);
            }
          }, 50);
        }
        document.getElementById('user-input').addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                handleSendMessage(); // Panggil fungsi kirim pesan
                event.preventDefault(); // Mencegah tindakan default (jika ada)
            }
        });
          // Fungsi untuk mengirim pesan
          function handleSendMessage() {
            const userInput = document.getElementById("user-input");
            const chatboxBody = document.getElementById("chatbox-body");
        
            if (!userInput || !chatboxBody || userInput.value.trim() === "") return;
        
            // Tambahkan pesan pengguna
            const userMessage = document.createElement("div");
            userMessage.className = "user-message";
            userMessage.textContent = userInput.value;
            chatboxBody.appendChild(userMessage);
        
            userInput.value = "";
        
            // Panggil fungsi untuk menggulir ke bawah
            scrollToBottom();
        
            // Tambahkan balasan sistem
            showSystemResponse("Hubungi Kami Kapan Saja");
        }
        
        function showSystemResponse(responseText) {
            const chatboxBody = document.getElementById("chatbox-body");
            if (!chatboxBody) return;
        
            // Bungkus typing-indicator dalam elemen chatbox-message
            const chatboxMessage = document.createElement("div");
            chatboxMessage.className = "chatbox-message";
        
            const typingIndicator = document.createElement("div");
            typingIndicator.className = "typing-indicator";
            typingIndicator.innerHTML = `<span></span><span></span><span></span>`;
            chatboxMessage.appendChild(typingIndicator);
        
            chatboxBody.appendChild(chatboxMessage);
            scrollToBottom();
        
            setTimeout(() => {
                chatboxBody.removeChild(chatboxMessage);
        
                // Bungkus pesan sistem dalam elemen chatbox-message
                const systemMessageWrapper = document.createElement("div");
                systemMessageWrapper.className = "chatbox-message";
        
                // Tambahkan pesan sistem
                systemMessageWrapper.innerHTML = `
                    <p>${responseText}</p>
                    <p>
                        Silahkan Klik <a href="https://wa.me/628123456789" target="_blank" style="color: white; text-decoration: underline;">
                        Di Sini. <img src="images/iconwhatsapp.png" alt="Icon" style="width: 14px; height: 16px; margin-left: 2px; vertical-align: middle;"></a>
                    </p>
                `;
        
                chatboxBody.appendChild(systemMessageWrapper);
                scrollToBottom();
            }, 2000);
        }
        
        
        function scrollToBottom() {
            const chatboxBody = document.getElementById("chatbox-body");
            if (chatboxBody) {
                chatboxBody.scrollTop = chatboxBody.scrollHeight; // Gulir ke bagian bawah
            }
        }
        // Panggil `scrollToBottom` setelah menambahkan elemen
        chatboxBody.appendChild(chatboxMessage);
        scrollToBottom();
        
        
          // Tambahkan event listener untuk tombol kirim
          document.getElementById("send-button")?.addEventListener("click", handleSendMessage);