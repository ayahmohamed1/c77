// ============================================================
// 🎁 GIFT DATA — EDIT HERE to add or change customer content
// ============================================================
// Each key is the URL slug: /gift/aya → id = "aya"
// ============================================================

export interface GiftData {
  name: string;           // Shown in the intro "Make a wish, [name]!"
  senderName?: string;    // Signature at the bottom of the letter (e.g., "Aya ✨")
  envelopeImage: string;  // Path inside /public — the envelope image
  birthdayImage: string;  // Path inside /public — the main birthday card image
  message: string;        // The birthday message (supports \n for line breaks)
  musicUrl?: string;      // Optional: URL to a background music mp3
  accentColor?: string;   // Optional: custom accent color (default: #38bdf8)
}

// ============================================================
// CUSTOMER DATA
// ============================================================
const defaultGift: GiftData = {
  name: "Habiby",                                     // اسم مستلم الهدية
  senderName: "your love",                            // التوقيع في آخر الرسالة (اختياري)
  envelopeImage: "/images/envelope-aya.png",          // صورة الظرف
  birthdayImage: "/images/birthday-aya.png",          // صورة الهدية النهائية
  accentColor: "#38bdf8",                             // اللون الأزرق الفاتح المتوافق مع التصميم الجديد
  musicUrl: "",                                       // رابط الموسيقى هنا
  message: `Happy Birthday, My Love 🤍🎂
Happy birthday to the man who holds my heart in the most beautiful way♥️
You are more than just the person I love; you are the one I pray for, the future I dream of, and the person I want beside me through every chapter of my life. I hope life gives you all the happiness your heart deserves, because seeing you happy means more to me than words could ever explain.
If I could wish for one thing, it would be to spend every birthday by your side, loving you more with every passing year, until we grow old together. You will always have a special place in my heart that no one else could ever fill.
Happy birthday, my future, my favorite person, and my forever. I love you more than words can ever say. ♾️♥️
I hope I get to spend every birthday by your side, until we grow old together.♥️
No matter how many miles separate us, my heart will always be right there with you. ♥️`,
};

const giftData: Record<string, GiftData> = {
  ahmed: defaultGift,
  aya: defaultGift,
};

export default giftData;