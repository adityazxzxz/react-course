#react-course
npm install -g live-server
npm install babel-cli@6.24.1

npm install babel-core@6.25.0 babel-loader@7.1.1
npm install webpack@3.1.0
npm install react@16.0.0 react-dom@16.0.0

babel src/playground/build-it-visible.js --out-file public/scripts/app.js --presets="env,react" --watch


operator && bisa digunakan "apabila sesuai kriteria maka eksekusi"


######yang harus ada

#module
npm install babel-cli@6.24.1
npm install babel-core@6.25.0 babel-loader@7.1.1
npm install webpack@3.1.0
npm install react@16.0.0 react-dom@16.0.0
npm install babel-plugin-transform-class-properties@6.24.1

#penting
transform class properties plugin babel untuk convert dari sntax lama ke syntax baru, jd g perlu panggil constructor lagi

#file
webpack.config.js
.babelrc


#cara running
npm run serve -> untuk menjalankan server saja
npm run build -> generate file bundle.js untuk production
npm run dev-server -> untuk menjalankan code pada server tanpa membuat file bundle.js (on memory only)



