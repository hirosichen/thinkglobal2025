#!/bin/bash
# Generate 8 anonymous professional speaker headshots via xAI Grok Imagine.
# Style: editorial studio portrait, dark backdrop, warm side light, square crop.

set -euo pipefail
KEY="${XAI_API_KEY:-}"
[ -z "$KEY" ] && { echo "XAI_API_KEY not set" >&2; exit 1; }

OUT_DIR="$(dirname "$0")/../public/img/speakers"
mkdir -p "$OUT_DIR"

STYLE="Square editorial portrait, single anonymous fictional person facing camera, professional studio lighting with warm amber rim light from upper-left, very dark charcoal background, subtle film grain, shallow depth of field, sharp eyes, neutral confident expression, business attire, magazine-cover quality, photoreal, no logos, no text"

PROMPTS=(
  "01|Black woman in her 40s with short curly hair, dark blazer, minimal jewelry, ${STYLE}"
  "02|Asian man in his 50s with silver hair and trimmed beard, navy turtleneck, ${STYLE}"
  "03|White woman in her 30s with platinum blonde hair pulled back, sharp suit, ${STYLE}"
  "04|South Asian man in his 40s with dark hair, glasses, charcoal three-piece, ${STYLE}"
  "05|Middle Eastern man in his 60s with grey beard, dark suit, distinguished, ${STYLE}"
  "06|Latina woman in her 30s, long dark hair, cream blouse, soft smile, ${STYLE}"
  "07|East Asian woman in her 40s, short black bob, black blazer, intense gaze, ${STYLE}"
  "08|White man in his 30s with messy brown hair, open collar shirt no tie, founder look, ${STYLE}"
)

for entry in "${PROMPTS[@]}"; do
  num="${entry%%|*}"
  prompt="${entry#*|}"
  echo "→ Generating speaker $num"
  resp=$(curl -sS -X POST https://api.x.ai/v1/images/generations \
    -H "Authorization: Bearer $KEY" \
    -H "Content-Type: application/json" \
    -d "$(jq -nc --arg p "$prompt" --arg m "grok-imagine-image" '{model:$m, prompt:$p, n:1}')")
  url=$(echo "$resp" | jq -r '.data[0].url // empty')
  if [ -z "$url" ]; then
    echo "  ✗ no url: $resp" >&2
    continue
  fi
  curl -sS -o "$OUT_DIR/speaker-$num.jpg" "$url"
  echo "  ✓ saved speaker-$num.jpg"
done

ls -la "$OUT_DIR"
