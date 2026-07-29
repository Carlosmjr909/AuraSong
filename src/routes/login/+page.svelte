<!DOCTYPE html>

<html class="dark" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;800&amp;family=JetBrains+Mono:wght@400;500&amp;family=Hanken+Grotesk:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(0, 219, 233, 0.2);
        }

        .neon-input:focus-within {
            box-shadow: 0 0 15px rgba(0, 219, 233, 0.4);
            border-bottom-width: 2px;
            border-color: #00dbe9;
        }

        @keyframes scanline {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }

        .grid-overlay {
            background-image: 
                linear-gradient(to right, rgba(0, 219, 233, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 219, 233, 0.05) 1px, transparent 1px);
            background-size: 50px 50px;
        }

        .glow-button {
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .glow-button:hover {
            box-shadow: 0 0 25px rgba(0, 219, 233, 0.6);
            transform: translateY(-2px);
        }

        .bg-animate {
            background: radial-gradient(circle at 50% 50%, #1b1b20 0%, #131318 100%);
        }

        .light-ray {
            position: absolute;
            width: 2px;
            height: 100vh;
            background: linear-gradient(to bottom, transparent, #00dbe9, transparent);
            opacity: 0.2;
            filter: blur(2px);
            animation: ray-move 8s infinite linear;
        }

        @keyframes ray-move {
            0% { transform: translateX(-100vw) rotate(45deg); }
            100% { transform: translateX(100vw) rotate(45deg); }
        }
    </style>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              "colors": {
                      "primary": "#dbfcff",
                      "on-primary-fixed": "#002022",
                      "surface-container-low": "#1b1b20",
                      "on-tertiary": "#223600",
                      "on-primary": "#00363a",
                      "inverse-on-surface": "#303036",
                      "on-secondary-container": "#500050",
                      "tertiary": "#e5ffba",
                      "outline": "#849495",
                      "on-primary-fixed-variant": "#004f54",
                      "on-error": "#690005",
                      "secondary-fixed": "#ffd7f5",
                      "on-background": "#e4e1e9",
                      "inverse-surface": "#e4e1e9",
                      "primary-container": "#00f0ff",
                      "on-secondary": "#5b005b",
                      "error-container": "#93000a",
                      "on-secondary-fixed": "#380038",
                      "tertiary-fixed": "#a9f900",
                      "surface-container-high": "#2a292f",
                      "surface-variant": "#35343a",
                      "on-tertiary-fixed": "#121f00",
                      "surface-container": "#1f1f25",
                      "outline-variant": "#3b494b",
                      "tertiary-container": "#a2ef00",
                      "on-error-container": "#ffdad6",
                      "primary-fixed-dim": "#00dbe9",
                      "on-tertiary-fixed-variant": "#334f00",
                      "on-tertiary-container": "#456900",
                      "error": "#ffb4ab",
                      "background": "#131318",
                      "on-surface-variant": "#b9cacb",
                      "primary-fixed": "#7df4ff",
                      "surface-tint": "#00dbe9",
                      "surface-container-lowest": "#0e0e13",
                      "surface": "#131318",
                      "surface-container-highest": "#35343a",
                      "on-primary-container": "#006970",
                      "on-surface": "#e4e1e9",
                      "tertiary-fixed-dim": "#94db00",
                      "secondary-container": "#fe00fe",
                      "secondary": "#ffabf3",
                      "surface-dim": "#131318",
                      "on-secondary-fixed-variant": "#810081",
                      "inverse-primary": "#006970",
                      "surface-bright": "#39383e",
                      "secondary-fixed-dim": "#ffabf3"
              },
              "borderRadius": {
                      "DEFAULT": "0.25rem",
                      "lg": "0.5rem",
                      "xl": "0.75rem",
                      "full": "9999px"
              },
              "spacing": {
                      "sm": "12px",
                      "xl": "80px",
                      "base": "8px",
                      "xs": "4px",
                      "lg": "48px",
                      "gutter": "24px",
                      "margin-mobile": "16px",
                      "margin-desktop": "40px",
                      "md": "24px"
              },
              "fontFamily": {
                      "headline-md": ["Sora"],
                      "label-sm": ["JetBrains Mono"],
                      "label-md": ["JetBrains Mono"],
                      "body-md": ["Hanken Grotesk"],
                      "headline-sm": ["Sora"],
                      "display-lg": ["Sora"],
                      "display-lg-mobile": ["Sora"],
                      "body-lg": ["Hanken Grotesk"]
              },
              "fontSize": {
                      "headline-md": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                      "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "500"}],
                      "label-md": ["14px", {"lineHeight": "20px", "letterSpacing": "0.05em", "fontWeight": "500"}],
                      "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                      "headline-sm": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                      "display-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.04em", "fontWeight": "800"}],
                      "display-lg-mobile": ["40px", {"lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "800"}],
                      "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}]
              }
            },
          },
        }
    </script>
</head>
<body class="bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container min-h-screen overflow-hidden flex items-center justify-center p-margin-mobile md:p-margin-desktop">
<!-- Atmospheric Background Layers -->
<div class="fixed inset-0 z-0 bg-animate"></div>
<div class="fixed inset-0 z-0 grid-overlay opacity-30"></div>
<!-- Light Rays -->
<div class="light-ray" style="left: 10%; animation-delay: 0s;"></div>
<div class="light-ray" style="left: 40%; animation-delay: -2s;"></div>
<div class="light-ray" style="left: 70%; animation-delay: -4s;"></div>
<div class="light-ray" style="left: 90%; animation-delay: -6s;"></div>
<!-- Login Container -->
<main class="relative z-10 w-full max-w-120">
<!-- Brand Identity -->
<div class="text-center mb-lg">
<h1 class="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg italic tracking-tighter text-primary drop-shadow-[0_0_15px_rgba(0,219,233,0.5)]">
                AuraSong
            </h1>
<p class="font-label-md text-label-md text-primary-fixed-dim/80 mt-xs tracking-widest uppercase">
                Join the Vibe
            </p>
</div>
<!-- Glassmorphism Card -->
<section class="glass-card rounded-xl p-md md:p-lg shadow-2xl relative overflow-hidden group">
<!-- Inner Glow Decoration -->
<div class="absolute -top-24 -left-24 w-48 h-48 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-500"></div>
<div class="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary/10 rounded-full blur-[80px] group-hover:bg-secondary/20 transition-colors duration-500"></div>
<form class="space-y-md relative z-10" onsubmit={(event) => event.preventDefault()}>
<!-- Inputs -->
<div class="space-y-sm">
<div class="relative group/input border-b border-outline-variant transition-all neon-input bg-surface-container-lowest/30 p-sm rounded-t-lg">
<label class="block font-label-sm text-label-sm text-on-surface-variant/70 mb-xs uppercase" for="username">Username</label>
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary-fixed-dim" data-icon="account_circle">account_circle</span>
<input class="bg-transparent border-none focus:ring-0 w-full font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/30" id="username" name="username" placeholder="cyberpunk_listener" type="text"/>
</div>
</div>
<div class="relative group/input border-b border-outline-variant transition-all neon-input bg-surface-container-lowest/30 p-sm rounded-t-lg">
<label class="block font-label-sm text-label-sm text-on-surface-variant/70 mb-xs uppercase" for="password">Password</label>
<div class="flex items-center gap-sm">
<span class="material-symbols-outlined text-primary-fixed-dim" data-icon="lock">lock</span>
<input class="bg-transparent border-none focus:ring-0 w-full font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/30" id="password" name="password" placeholder="••••••••" type="password"/>
</div>
</div>
</div>
<!-- Submit Button -->
<button class="glow-button w-full py-md bg-linear-to-r from-primary-fixed-dim to-secondary-container text-on-primary-fixed font-headline-sm text-headline-sm rounded-lg flex items-center justify-center gap-sm active:scale-[0.98]" type="submit">
<span>Enter the Sonic Era</span>
<span class="material-symbols-outlined" data-icon="keyboard_double_arrow_right">keyboard_double_arrow_right</span>
</button>
<!-- Divider -->
<div class="flex items-center gap-md py-sm">
<div class="h-px flex-1 bg-outline-variant/30"></div>
<span class="font-label-sm text-label-sm text-on-surface-variant/50">OR CONNECT WITH</span>
<div class="h-px flex-1 bg-outline-variant/30"></div>
</div>
<!-- Social Logins -->
<div class="grid grid-cols-2 gap-sm">
<button class="flex items-center justify-center gap-sm p-sm rounded-lg border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all font-label-md text-label-md text-primary">
<div class="w-5 h-5 flex items-center justify-center">
<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.069.069 0 0 0-.032.027C.533 9.048-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.297 1.187-1.996a.076.076 0 0 0-.041-.106 13.097 13.097 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.125-.094.249-.192.37-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.185 1.995a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"></path></svg>
</div>
                        Discord
                    </button>
<button class="flex items-center justify-center gap-sm p-sm rounded-lg border border-tertiary-fixed-dim/20 bg-tertiary-fixed-dim/5 hover:bg-tertiary-fixed-dim/10 transition-all font-label-md text-label-md text-tertiary-fixed-dim">
<div class="w-5 h-5 flex items-center justify-center">
<svg class="w-full h-full" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.49 17.31c-.217.357-.68.47-1.037.253-2.86-1.748-6.46-2.143-10.697-1.176-.41.094-.82-.162-.914-.572-.094-.41.162-.82.572-.914 4.634-1.06 8.604-.613 11.823 1.35.357.217.47.68.253 1.037zm1.464-3.26c-.274.444-.852.585-1.296.31-3.275-2.012-8.27-2.597-12.144-1.42-.502.152-1.03-.133-1.182-.635-.152-.502.133-1.03.635-1.182 4.417-1.34 9.917-.69 13.677 1.626.444.274.585.852.31 1.296zm.126-3.414C15.42 8.447 9.387 8.247 5.86 9.317c-.572.174-1.18-.153-1.354-.725-.174-.572.153-1.18.725-1.354 4.053-1.23 10.72-1.004 14.935 1.498.514.305.682.973.377 1.487-.305.514-.973.682-1.487.377z"></path></svg>
</div>
                        Spotify
                    </button>
</div>
</form>
</section>
<!-- Footer Actions -->
<div class="mt-lg text-center space-y-md">
<p class="font-body-md text-body-md text-on-surface-variant/60">
                New frequency? 
                <a class="text-primary-fixed-dim font-bold hover:underline underline-offset-4 transition-all" href="#">Sign Up</a>
</p>
<div class="flex justify-center gap-lg">
<a class="font-label-sm text-label-sm text-on-surface-variant/40 hover:text-primary transition-colors" href="#">Privacy</a>
<a class="font-label-sm text-label-sm text-on-surface-variant/40 hover:text-primary transition-colors" href="#">Terms</a>
<a class="font-label-sm text-label-sm text-on-surface-variant/40 hover:text-primary transition-colors" href="#">Support</a>
</div>
</div>
</main>
<!-- Interactive Visualizer (Signature Component) -->
<div class="fixed bottom-0 left-0 w-full h-32 flex items-end justify-center gap-xs px-md pb-md opacity-20 pointer-events-none">
<div class="visualizer-bar w-2 bg-primary"></div>
<div class="visualizer-bar w-2 bg-secondary"></div>
<div class="visualizer-bar w-2 bg-primary"></div>
<div class="visualizer-bar w-2 bg-tertiary"></div>
<div class="visualizer-bar w-2 bg-primary"></div>
<div class="visualizer-bar w-2 bg-secondary"></div>
<div class="visualizer-bar w-2 bg-primary"></div>
<div class="visualizer-bar w-2 bg-tertiary"></div>
<div class="visualizer-bar w-2 bg-primary"></div>
<div class="visualizer-bar w-2 bg-secondary"></div>
<div class="visualizer-bar w-2 bg-primary"></div>
<div class="visualizer-bar w-2 bg-tertiary"></div>
<div class="visualizer-bar w-2 bg-primary"></div>
<div class="visualizer-bar w-2 bg-secondary"></div>
</div>
<script>
        // Micro-interaction for visualizer bars
        const bars = document.querySelectorAll('.visualizer-bar');
        bars.forEach(bar => {
            const duration = Math.random() * 0.5 + 0.5;
            const delay = Math.random() * 2;
            bar.style.height = '10%';
            bar.animate([
                { height: '10%' },
                { height: (Math.random() * 80 + 20) + '%' },
                { height: '10%' }
            ], {
                duration: duration * 1000,
                iterations: Infinity,
                delay: delay * 1000,
                easing: 'ease-in-out'
            });
        });

        // Hover effect on the login card to move background rays slightly
        const card = document.querySelector('.glass-card');
        const rays = document.querySelectorAll('.light-ray');
        
        card.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            rays.forEach(ray => {
                ray.style.transform = `translateX(${xAxis}px) rotate(45deg)`;
            });
        });

        card.addEventListener('mouseleave', () => {
            rays.forEach(ray => {
                ray.style.transform = `translateX(0) rotate(45deg)`;
            });
        });
    </script>
</body></html>