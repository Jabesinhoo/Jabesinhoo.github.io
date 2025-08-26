 let collectedItems = 0;
        let inventory = [];
        let isNight = false;
        
        // Pantalla de carga
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loadingScreen = document.getElementById('loadingScreen');
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }, 1500);
            
            // Generar mosaico de perfil
        });
        
        // Generar mosaico de perfil con bloques de Minecraft

        // Sistema de día/noche
        function toggleDayNight() {
            isNight = !isNight;
            const icon = document.getElementById('dayNightIcon');
            const bg = document.getElementById('minecraftBg');
            
            if (isNight) {
                icon.className = 'fas fa-moon';
                bg.style.background = 'linear-gradient(180deg, #000428 0%, #004e92 50%, #000000 100%)';
            } else {
                icon.className = 'fas fa-sun';
                bg.style.background = 'linear-gradient(180deg, #87CEEB 0%, #87CEEB 30%, #98D98E 30%, #98D98E 100%)';
            }
        }
        
        // Partículas estilo Minecraft
        const minecraftParticles = ['⛏️', '🪓', '🗡️', '🏹', '🛡️', '💎', '🪨', '🌲', '🍖', '📦', '🧪', '🔮', '📜', '🗺️'];
        
        function createMinecraftParticle() {
            const particle = document.createElement('div');
            particle.className = 'minecraft-particle';
            particle.textContent = minecraftParticles[Math.floor(Math.random() * minecraftParticles.length)];
            particle.style.left = Math.random() * window.innerWidth + 'px';
            particle.style.bottom = '-50px';
            particle.style.fontSize = Math.random() * 10 + 20 + 'px';
            
            document.getElementById('particles-container').appendChild(particle);
            
            setTimeout(() => particle.remove(), 2000);
        }
        
        // Generar partículas
        setInterval(createMinecraftParticle, 1500);
        
        // Romper bloques
        function breakBlock(block) {
            block.style.transform = 'scale(0)';
            block.style.opacity = '0';
            
            // Crear partículas
            for (let i = 0; i < 5; i++) {
                setTimeout(() => {
                    createBreakParticle(block.offsetLeft, block.offsetTop);
                }, i * 50);
            }
            
            // Soltar item
            dropItem(block);
            
            setTimeout(() => {
                block.remove();
                // Crear nuevo bloque
                createNewBlock();
            }, 500);
        }
        
        function createBreakParticle(x, y) {
            const particle = document.createElement('div');
            particle.textContent = '🪨';
            particle.style.position = 'fixed';
            particle.style.left = x + Math.random() * 40 - 20 + 'px';
            particle.style.top = y + Math.random() * 40 - 20 + 'px';
            particle.style.fontSize = '20px';
            particle.style.zIndex = '1000';
            particle.style.pointerEvents = 'none';
            particle.style.animation = 'particle-float 1s ease-out forwards';
            
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 1000);
        }
        
        function dropItem(block) {
            const items = ['⛏️', '🪵', '🪨', '💎'];
            const item = document.createElement('div');
            item.className = 'minecraft-particle';
            item.textContent = items[Math.floor(Math.random() * items.length)];
            item.style.left = block.offsetLeft + 'px';
            item.style.top = block.offsetTop + 'px';
            item.style.fontSize = '30px';
            item.style.animation = 'particle-float 2s ease-out forwards';
            
            document.body.appendChild(item);
            setTimeout(() => item.remove(), 2000);
        }
        
        function createNewBlock() {
            const blocks = ['grass-block', 'stone-block', 'dirt-block', 'wood-block', 'diamond-block', 'redstone-block', 'lapis-block', 'emerald-block', 'obsidian-block'];
            const newBlock = document.createElement('div');
            newBlock.className = 'minecraft-block ' + blocks[Math.floor(Math.random() * blocks.length)];
            newBlock.style.top = Math.random() * 80 + 10 + '%';
            newBlock.style.left = Math.random() * 80 + 10 + '%';
            newBlock.onclick = function() { breakBlock(this); };
            
            document.body.appendChild(newBlock);
        }
        
        // Recolectar picos
        function collectPickaxe(pickaxe) {
            if (inventory.length < 5) {
                inventory.push('⛏️');
                updateInventory();
                
                pickaxe.style.transform = 'scale(0) rotate(720deg)';
                pickaxe.style.opacity = '0';
                
                setTimeout(() => {
                    pickaxe.remove();
                    createNewPickaxe();
                }, 500);
            }
        }
        
        function createNewPickaxe() {
            const newPickaxe = document.createElement('div');
            newPickaxe.className = 'diamond-pickaxe';
            newPickaxe.textContent = '⛏️';
            newPickaxe.style.top = Math.random() * 70 + 15 + '%';
            newPickaxe.style.left = Math.random() * 80 + 10 + '%';
            newPickaxe.onclick = function() { collectPickaxe(this); };
            
            document.body.appendChild(newPickaxe);
        }
        
        // Recolectar espadas
        function collectSword(sword) {
            if (inventory.length < 5) {
                inventory.push('⚔️');
                updateInventory();
                
                sword.style.transform = 'scale(0) rotate(720deg)';
                sword.style.opacity = '0';
                
                setTimeout(() => {
                    sword.remove();
                    createNewSword();
                }, 500);
            }
        }
        
        function createNewSword() {
            const newSword = document.createElement('div');
            newSword.className = 'diamond-sword';
            newSword.textContent = '⚔️';
            newSword.style.top = Math.random() * 70 + 15 + '%';
            newSword.style.left = Math.random() * 80 + 10 + '%';
            newSword.onclick = function() { collectSword(this); };
            
            document.body.appendChild(newSword);
        }
        
        // Actualizar inventario
        function updateInventory() {
            for (let i = 0; i < 5; i++) {
                const slot = document.getElementById(`slot-${i}`);
                if (inventory[i]) {
                    slot.textContent = inventory[i];
                } else {
                    slot.textContent = '';
                }
            }
        }
        
        // Modal de contacto
        function showContactModal() {
            const modal = document.getElementById('contactModal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
        
        function hideContactModal() {
            const modal = document.getElementById('contactModal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
        
        // Cerrar modal al hacer clic fuera
        document.getElementById('contactModal').addEventListener('click', (e) => {
            if (e.target.id === 'contactModal') {
                hideContactModal();
            }
        });
        
        // Animación de entrada para las tarjetas
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.minecraft-card').forEach(card => {
            observer.observe(card);
        });
        
        // Efectos de sonido visual
        document.querySelectorAll('.minecraft-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                console.log('🎵 *sonido de Minecraft*');
            });
        });
    