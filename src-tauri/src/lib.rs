#[tauri::command]
fn greet(name: &str) -> String {
    format!("Greetings, {}! You've been greeted from Rust!", name)
}

#[tauri::command]
fn say_hello() -> String {
    format!("Hello!")
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_deep_link::init())
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::default()
                        .level(log::LevelFilter::Info)
                        .build(),
                )?;
            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![greet, say_hello])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
