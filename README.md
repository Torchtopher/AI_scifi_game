# Real Science or Science Fiction Game

A lightweight web game where players guess whether each statement is **real science** or **science fiction**.

## Features

- 10-round guessing gameplay
- Score and streak tracking
- Instant feedback with explanations
- Simple Node.js + Express deployment

## Run locally

```bash
npm install
npm start
```

Then open `http://localhost:3000`.

## Deploy on a DigitalOcean Droplet (Ubuntu)

### Option A: Deploy directly with Node.js + PM2

```bash
# 1) Install Node.js 20 and git
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs git

# 2) Clone your repository
git clone <your-repo-url>
cd AI_scifi_game

# 3) Install dependencies
npm install

# 4) Start with PM2
sudo npm install -g pm2
pm2 start server.js --name science-vs-scifi
pm2 save
pm2 startup
```

Optional Nginx reverse proxy to expose on port 80:

```bash
sudo apt-get install -y nginx
sudo tee /etc/nginx/sites-available/science-vs-scifi >/dev/null <<'NGINX'
server {
    listen 80;
    server_name _;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
NGINX
sudo ln -s /etc/nginx/sites-available/science-vs-scifi /etc/nginx/sites-enabled/science-vs-scifi
sudo nginx -t
sudo systemctl restart nginx
```

### Option B: Docker deployment

```bash
docker build -t science-vs-scifi .
docker run -d --name science-vs-scifi -p 80:3000 science-vs-scifi
```

## Health check

- Endpoint: `GET /health`
- Response: `{ "status": "ok" }`
