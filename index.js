       // Initialize Lucide Icons Safely
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            } else {
                console.warn('Lucide failed to load. Using fallback icons.');
            }
        });

        // Loader Sequence
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 800);
            }, 1000);
        });

        // Navbar Interaction
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            nav.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Tabs Logic
        function switchTab(e, tabId) {
            document.querySelectorAll('.tab-trigger').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
            
            e.currentTarget.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        }

        // Booking Logic
        function handleBooking(e) {
            e.preventDefault();
            const form = e.target;
            const success = document.getElementById('success-msg');
            form.style.opacity = '0.3';
            form.style.pointerEvents = 'none';
            setTimeout(() => {
                form.style.display = 'none';
                success.style.display = 'block';
            }, 800);
        }
