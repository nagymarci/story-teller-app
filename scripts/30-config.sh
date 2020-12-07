cat > /usr/share/nginx/html/config.js <<EOF
window.apiUrl = "$API_URL"
window.wsUrl = "$WS_URL"
window.tracking = "$GA_TRACKING"
EOF