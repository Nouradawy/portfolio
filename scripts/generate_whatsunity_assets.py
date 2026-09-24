import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

def create_assets():
    # Source paths
    src_wide_white = r"C:\Users\Nouradawy\.gemini\antigravity-ide\brain\56876a60-14b4-4ffe-a7cc-8ed1be496db8\.user_uploaded\media_1790228252743.png"

    os.makedirs(r"h:\Repo\portfolio2\public\assets\whatsunity", exist_ok=True)
    os.makedirs(r"h:\Repo\portfolio2\public\whatsunity", exist_ok=True)

    # Load authentic white logo
    img_white = Image.open(src_wide_white).convert("RGBA")
    bbox_white = img_white.getbbox()
    logo_h_tight = img_white.crop(bbox_white)

    # Extract white emblem (shield + infinity) and white wordmark ("WhatsUnity")
    # In img_white: emblem is x=16..286, y=16..216; wordmark is x=305..932, y=16..216
    emblem_raw = img_white.crop((16, 16, 286, 216))
    emblem_tight = emblem_raw.crop(emblem_raw.getbbox())

    wordmark_raw = img_white.crop((305, 16, 932, 216))
    wordmark_tight = wordmark_raw.crop(wordmark_raw.getbbox())

    # -------------------------------------------------------------
    # 1. Official Logo Assets: Horizontal & Square in White
    # -------------------------------------------------------------
    # A) whatsunity-logo-horizontal.png (White Horizontal Logo on Transparent)
    pad_h = 30
    h_canvas = Image.new("RGBA", (logo_h_tight.width + pad_h * 2, logo_h_tight.height + pad_h * 2), (0, 0, 0, 0))
    h_canvas.paste(logo_h_tight, (pad_h, pad_h), logo_h_tight)
    h_canvas.save(r"h:\Repo\portfolio2\public\assets\whatsunity\whatsunity-logo-horizontal.png", "PNG", optimize=True)

    # B) whatsunity-logo-square.png & whatsunity-logo.png (1024x1024 White Square Logo on Transparent)
    square_1024 = Image.new("RGBA", (1024, 1024), (0, 0, 0, 0))
    target_emblem_w = 480
    r_emb = target_emblem_w / emblem_tight.width
    emblem_sq = emblem_tight.resize((target_emblem_w, int(emblem_tight.height * r_emb)), Image.Resampling.LANCZOS)

    target_word_w = 520
    r_word = target_word_w / wordmark_tight.width
    wordmark_sq = wordmark_tight.resize((target_word_w, int(wordmark_tight.height * r_word)), Image.Resampling.LANCZOS)

    gap_sq = 32
    total_sq_h = emblem_sq.height + gap_sq + wordmark_sq.height
    top_y = (1024 - total_sq_h) // 2

    square_1024.paste(emblem_sq, ((1024 - emblem_sq.width) // 2, top_y), emblem_sq)
    square_1024.paste(wordmark_sq, ((1024 - wordmark_sq.width) // 2, top_y + emblem_sq.height + gap_sq), wordmark_sq)

    square_1024.save(r"h:\Repo\portfolio2\public\assets\whatsunity\whatsunity-logo-square.png", "PNG", optimize=True)
    square_1024.save(r"h:\Repo\portfolio2\public\assets\whatsunity\whatsunity-logo.png", "PNG", optimize=True)

    # -------------------------------------------------------------
    # 2. Favicons & Tab Icons (Crisp White Emblem on Dark Squircle)
    # -------------------------------------------------------------
    sizes = [
        (r"h:\Repo\portfolio2\public\whatsunity\favicon-16x16.png", 16),
        (r"h:\Repo\portfolio2\public\whatsunity\favicon-32x32.png", 32),
        (r"h:\Repo\portfolio2\public\whatsunity\favicon.png", 64),
        (r"h:\Repo\portfolio2\public\whatsunity\apple-touch-icon.png", 180),
        (r"h:\Repo\portfolio2\public\whatsunity\icon-192.png", 192),
        (r"h:\Repo\portfolio2\public\whatsunity\icon-512.png", 512),
        (r"h:\Repo\portfolio2\public\favicon-whatsunity.png", 64),
        (r"h:\Repo\portfolio2\public\apple-touch-icon-whatsunity.png", 180),
    ]

    for path, sz in sizes:
        fav = Image.new("RGBA", (sz, sz), (0, 0, 0, 0))
        fdraw = ImageDraw.Draw(fav)
        # Sleek dark squircle so the white emblem is razor sharp on both light and dark browser chrome
        radius = max(3, int(sz * 0.22))
        fdraw.rounded_rectangle(
            [(0, 0), (sz - 1, sz - 1)],
            radius=radius,
            fill=(6, 10, 16, 255),
            outline=(16, 185, 129, 90),
            width=max(1, int(sz * 0.03))
        )
        pad = max(2, int(sz * 0.16))
        inner_sz = sz - (pad * 2)
        r = min(inner_sz / emblem_tight.width, inner_sz / emblem_tight.height)
        icon_w, icon_h = int(emblem_tight.width * r), int(emblem_tight.height * r)
        icon_resized = emblem_tight.resize((icon_w, icon_h), Image.Resampling.LANCZOS)
        x = (sz - icon_w) // 2
        y = (sz - icon_h) // 2
        fav.paste(icon_resized, (x, y), icon_resized)
        fav.save(path, "PNG", optimize=True)

    # ICO file (contains 16, 32, 48)
    ico_images = []
    for sz in [16, 32, 48]:
        fav = Image.new("RGBA", (sz, sz), (0, 0, 0, 0))
        fdraw = ImageDraw.Draw(fav)
        radius = max(3, int(sz * 0.22))
        fdraw.rounded_rectangle(
            [(0, 0), (sz - 1, sz - 1)],
            radius=radius,
            fill=(6, 10, 16, 255),
            outline=(16, 185, 129, 90),
            width=1
        )
        pad = max(2, int(sz * 0.15))
        inner_sz = sz - (pad * 2)
        r = min(inner_sz / emblem_tight.width, inner_sz / emblem_tight.height)
        icon_w, icon_h = int(emblem_tight.width * r), int(emblem_tight.height * r)
        icon_resized = emblem_tight.resize((icon_w, icon_h), Image.Resampling.LANCZOS)
        x = (sz - icon_w) // 2
        y = (sz - icon_h) // 2
        fav.paste(icon_resized, (x, y), icon_resized)
        ico_images.append(fav)

    ico_images[0].save(
        r"h:\Repo\portfolio2\public\whatsunity\favicon.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=ico_images[1:]
    )
    ico_images[0].save(
        r"h:\Repo\portfolio2\public\favicon-whatsunity.ico",
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
        append_images=ico_images[1:]
    )

    # -------------------------------------------------------------
    # 3. OpenGraph Landscape Social Card (1200x630) with WHITE LOGO
    # -------------------------------------------------------------
    w, h = 1200, 630
    og = Image.new("RGBA", (w, h), (5, 7, 10, 255)) # #05070a

    # Ambient emerald glow behind the white logo
    glow = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow)
    cx, cy = 600, 160
    for rad in range(320, 0, -6):
        alpha = int(35 * (1 - rad / 320))
        glow_draw.ellipse(
            [cx - rad * 1.8, cy - rad, cx + rad * 1.8, cy + rad],
            fill=(16, 185, 129, alpha)
        )
    glow = glow.filter(ImageFilter.GaussianBlur(35))
    og = Image.alpha_composite(og, glow)

    draw = ImageDraw.Draw(og)

    # Top border ambient accent line
    draw.line([(0, 0), (w, 0)], fill=(16, 185, 129, 220), width=3)

    # Place the WHITE HORIZONTAL LOGO prominently in the center-top
    target_og_logo_w = 680
    r_og = target_og_logo_w / logo_h_tight.width
    og_logo_w = target_og_logo_w
    og_logo_h = int(logo_h_tight.height * r_og)
    og_logo = logo_h_tight.resize((og_logo_w, og_logo_h), Image.Resampling.LANCZOS)
    og_logo_x = (w - og_logo_w) // 2
    og_logo_y = 65

    # Paste white logo
    og.paste(og_logo, (og_logo_x, og_logo_y), og_logo)

    # Fonts
    try:
        font_headline = ImageFont.truetype("arialbd.ttf", 35)
        font_sub = ImageFont.truetype("arial.ttf", 21)
        font_badge = ImageFont.truetype("arialbd.ttf", 15)
        font_url = ImageFont.truetype("arialbd.ttf", 18)
    except:
        font_headline = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_badge = ImageFont.load_default()
        font_url = ImageFont.load_default()

    draw = ImageDraw.Draw(og)

    # Main Headline
    t1 = "One Home. One Subscription. Your Entire Household Included."
    bbox_t1 = draw.textbbox((0, 0), t1, font=font_headline)
    w_t1 = bbox_t1[2] - bbox_t1[0]
    draw.text(((w - w_t1) // 2, 280), t1, fill=(255, 255, 255, 255), font=font_headline)

    # Subtitle
    t2 = "Turnkey Compound Operating System · 100% Offline QR Gate Passes · Maintenance Governance"
    bbox_t2 = draw.textbbox((0, 0), t2, font=font_sub)
    w_t2 = bbox_t2[2] - bbox_t2[0]
    draw.text(((w - w_t2) // 2, 340), t2, fill=(165, 180, 200, 255), font=font_sub)

    # Feature Badges Pill Row
    badges = [
        "100% Offline QR Gate Security",
        "Dual-Engine Messaging (Appwrite + Telegram)",
        "Flutter Clean Architecture",
        "SQLite Local Master",
    ]
    pill_y = 415
    pill_h = 36
    pill_widths = []
    for b in badges:
        bb = draw.textbbox((0, 0), b, font=font_badge)
        pill_widths.append(bb[2] - bb[0] + 32)
    gap = 14
    total_pills_w = sum(pill_widths) + gap * (len(badges) - 1)
    curr_x = (w - total_pills_w) // 2

    for i, b in enumerate(badges):
        pw = pill_widths[i]
        draw.rounded_rectangle(
            [(curr_x, pill_y), (curr_x + pw, pill_y + pill_h)],
            radius=10,
            fill=(10, 20, 28, 230),
            outline=(16, 185, 129, 130),
            width=1
        )
        bb = draw.textbbox((0, 0), b, font=font_badge)
        tw = bb[2] - bb[0]
        th = bb[3] - bb[1]
        draw.text(
            (curr_x + (pw - tw) // 2, pill_y + (pill_h - th) // 2 - 1),
            b,
            fill=(225, 240, 250, 255),
            font=font_badge
        )
        curr_x += pw + gap

    # Bottom Footer Row in Card
    draw.line([(80, 520), (w - 80, 520)], fill=(30, 45, 60, 180), width=1)
    url_text = "www.nouradawy.tech/whatsunity"
    draw.text((80, 545), url_text, fill=(16, 185, 129, 255), font=font_url)

    author_text = "Engineered by Noureldin Adawy · B2B Enterprise Ready"
    bb_auth = draw.textbbox((0, 0), author_text, font=font_sub)
    draw.text((w - 80 - (bb_auth[2] - bb_auth[0]), 545), author_text, fill=(140, 155, 175, 255), font=font_sub)

    # Save OpenGraph Image (PNG and JPEG strictly < 300 KB)
    og_rgb = og.convert("RGB")
    og_rgb.save(r"h:\Repo\portfolio2\public\assets\whatsunity\whatsunity-og.jpg", "JPEG", quality=90, optimize=True)
    og.save(r"h:\Repo\portfolio2\public\assets\whatsunity\whatsunity-og.png", "PNG", optimize=True)
    og.save(r"h:\Repo\portfolio2\public\whatsunity\og-image.png", "PNG", optimize=True)

    # -------------------------------------------------------------
    # 4. OpenGraph Square Social Card (800x800) with WHITE LOGO
    # -------------------------------------------------------------
    sq_size = 800
    sq_og = Image.new("RGBA", (sq_size, sq_size), (5, 7, 10, 255))

    # Glow
    sq_glow = Image.new("RGBA", (sq_size, sq_size), (0, 0, 0, 0))
    sq_gdraw = ImageDraw.Draw(sq_glow)
    for rad in range(280, 0, -6):
        alpha = int(45 * (1 - rad / 280))
        sq_gdraw.ellipse(
            [400 - rad, 250 - rad, 400 + rad, 250 + rad],
            fill=(16, 185, 129, alpha)
        )
    sq_glow = sq_glow.filter(ImageFilter.GaussianBlur(35))
    sq_og = Image.alpha_composite(sq_og, sq_glow)

    sq_draw = ImageDraw.Draw(sq_og)
    sq_draw.line([(0, 0), (sq_size, 0)], fill=(16, 185, 129, 220), width=4)

    # Place WHITE SQUARE LOGO (Emblem + Wordmark)
    sq_emb_w = 340
    r_sq_emb = sq_emb_w / emblem_tight.width
    sq_emb = emblem_tight.resize((sq_emb_w, int(emblem_tight.height * r_sq_emb)), Image.Resampling.LANCZOS)

    sq_word_w = 380
    r_sq_word = sq_word_w / wordmark_tight.width
    sq_word = wordmark_tight.resize((sq_word_w, int(wordmark_tight.height * r_sq_word)), Image.Resampling.LANCZOS)

    gap_sq_og = 22
    total_sq_logo_h = sq_emb.height + gap_sq_og + sq_word.height
    sq_logo_top_y = 65

    sq_og.paste(sq_emb, ((sq_size - sq_emb.width) // 2, sq_logo_top_y), sq_emb)
    sq_og.paste(sq_word, ((sq_size - sq_word.width) // 2, sq_logo_top_y + sq_emb.height + gap_sq_og), sq_word)

    # Text in square card
    sq_draw = ImageDraw.Draw(sq_og)
    t_sq1 = "Residential Compound OS"
    bb_sq1 = sq_draw.textbbox((0, 0), t_sq1, font=font_headline)
    sq_draw.text(((sq_size - (bb_sq1[2] - bb_sq1[0])) // 2, 475), t_sq1, fill=(255, 255, 255, 255), font=font_headline)

    t_sq2 = "One Home · One Subscription · Family Included"
    bb_sq2 = sq_draw.textbbox((0, 0), t_sq2, font=font_sub)
    sq_draw.text(((sq_size - (bb_sq2[2] - bb_sq2[0])) // 2, 530), t_sq2, fill=(16, 185, 129, 255), font=font_sub)

    # Badge in square
    t_sq3 = "100% Offline QR Gate Passes · Flutter Clean Arch"
    bb_sq3 = sq_draw.textbbox((0, 0), t_sq3, font=font_badge)
    w_sq3 = bb_sq3[2] - bb_sq3[0] + 32
    sq_draw.rounded_rectangle(
        [((sq_size - w_sq3) // 2, 580), ((sq_size + w_sq3) // 2, 616)],
        radius=10,
        fill=(10, 20, 28, 230),
        outline=(16, 185, 129, 130),
        width=1
    )
    sq_draw.text(((sq_size - (bb_sq3[2] - bb_sq3[0])) // 2, 590), t_sq3, fill=(225, 240, 250, 255), font=font_badge)

    # Footer
    sq_draw.line([(60, 665), (sq_size - 60, 665)], fill=(30, 45, 60, 180), width=1)
    t_sq4 = "nouradawy.tech/whatsunity"
    bb_sq4 = sq_draw.textbbox((0, 0), t_sq4, font=font_url)
    sq_draw.text(((sq_size - (bb_sq4[2] - bb_sq4[0])) // 2, 695), t_sq4, fill=(16, 185, 129, 255), font=font_url)

    sq_og.save(r"h:\Repo\portfolio2\public\assets\whatsunity\whatsunity-og-square.png", "PNG", optimize=True)
    sq_og.convert("RGB").save(r"h:\Repo\portfolio2\public\assets\whatsunity\whatsunity-og-square.jpg", "JPEG", quality=90, optimize=True)

    print("Successfully generated all WhatsUnity branding with WHITE LOGO on dark cards!")

if __name__ == "__main__":
    create_assets()
