import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'



export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };


  return defineConfig({
    plugins: [react()],
    build: {
      manifest: true,

    },
    server: {


      proxy:
      {

        // "/clientdata": {
        //   target: "http://localhost:7000",
        //   changeOrigin: true,
        //   secure: false,


        // },
        "/demo": {
          target: "http://localhost:3012",
          changeOrigin: true,
          secure: false,


        },

        // show blogs data

        "/blogs/show": {
          target: "http://localhost:3012",
          changeOrigin: true,
          secure: false,
          headers: {
            'Content-Type': 'application/json', // Set the desired content type
          },



        },


        // post user data 

        "/employee/postuser": {
          target: "http://localhost:3012",
          changeOrigin: true,
          secure: false,
          headers: {
            'Content-Type': 'application/json', // Set the desired content type
          }, 
        },
        //show admin page 
        

        "/login": {
          target: "http://localhost:3012",
          changeOrigin: true,
          secure: false,
          headers: {
            'Content-Type': 'application/json', // Set the desired content type
          },


  

          
        },


      },
    },




  });

}




