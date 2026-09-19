// بيانات الاتصال بقاعدة بيانات Supabase لمركز بداية
const SUPABASE_URL = 'https://zcfrvhrixphfhcjomsyj.supabase.co/';
const SUPABASE_KEY = 'sb_publishable_X_ST_eKJwLWcNxaWt1X6qg_MdNsJU9A';

// تهيئة الاتصال بـ Supabase
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// تصدير العميل لاستخدامه عبر صفحات الموقع
window.supabaseClient = _supabase;