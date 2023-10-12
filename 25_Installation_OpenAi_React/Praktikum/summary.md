# Resume Instalation Open Ai React

# . Cara Menginstal OpenAI dalam Proyek React
    
    Berikut adalah cara menginstal OpenAI dalam proyek React:
1. Persiapkan Proyek React seperti tugas sebelumnya
# Contoh Code
 npx create-react-app my-app
 
2. Instalasi Paket OpenAI:
Disini kita perlu menginstal paket openai dari npm , dengan printah berikut:
# npm install openai

3. Impor Modul OpenAI:
Di dalam komponen React yang akan menggunakan OpenAI, Anda perlu mengimpor modul yang diperlukan dari paket openai.
Ini biasanya melibatkan Configuration dan OpenAIApi.
# Contoh pengimporan:
import { Configuration, OpenAIApi } from "openai";
Konfigurasi API Key:
kita perlu membuat objek konfigurasi dengan API Key yang telah dibuat sebelumnya. 
# Contoh code:
const configuration = new Configuration({
  apiKey: "copy kan api key nya disini"
});

Inisialisasi API OpenAI:
Setelah membuat objek konfigurasi, kita juga perlu menginisialisasi instance API OpenAI dengan objek konfigurasi yang telah  Dibuat:
# Contoh Code:
const openai = new OpenAIApi(configuration);
# Contoh Code
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Your prompt here",
  temperature: 0.5,
  max_tokens: 100,
});

disini kita dapat mengganti model, prompt, dan parameter lain sesuai kebutuhan proyek yg kita inginkan.
