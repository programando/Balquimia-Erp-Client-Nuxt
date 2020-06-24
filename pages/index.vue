<template>
<div class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">
    <header class="bg-cover bg-center  h-full w-full" 
            style="background-image: url('https://ik.imagekit.io/q5edmtudmz/peter-lloyd-680526-unsplash_TYZn4kayG.jpg');">
            <h1 class="text-4xl text-center mt-12 font-bold text-white tracking-wide">BALQUIMIA S.A.S.</h1>

        <div class="content px-40 py-2">
            <div class="body mt-20 mx-8">
                <div class="md:flex items-center justify-between">
                   
                    <div class="w-full md:w-1/2 mr-auto" style="text-shadow: 0 20px 50px hsla(0,0%,0%,8);">
                        
                        <h2 class=" text-2xl font-bold text-white tracking-wide">Welcome <span class="text-gray-800"> Aboard</span></h2>
                        <p class="text-gray-300">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <span class="text-white">Create New Account?<a href="#" class="text-gray-900 text-lg ml-2 font-bold">Sign Up</a></span>
                    </div>

                    <div class="w-full md:max-w-md mt-6">
                        <div class="card bg-white shadow-md rounded-lg px-4 py-4 mb-6 ">
                            <form action="#">
                                <div class="flex items-center justify-center">
                                    <h2 class="text-2xl font-bold tracking-wide">
                                        Bienvenid@
                                    </h2> 
                                </div>
                                <h5 class="text-sm text-center font-semibold text-gray-800 mb-2">
                                   Registre sus credenciales para ingreso al sistema
                                </h5>
                                <input type="text" class="rounded px-4 w-full py-1 bg-gray-200  border border-gray-400 mb-6 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Email Address">
                                <input type="password" class="rounded px-4 w-full py-1 bg-gray-200  border border-gray-400 mb-4 text-gray-700 placeholder-gray-700 focus:bg-white focus:outline-none" placeholder="Password">
                                <div class="flex items-center justify-between">
                                    <a href="#" class="text-gray-600">Forget Password?</a>
                                    <button class="bg-gray-800 text-gray-200  px-2 py-1 rounded">Sign In</button>
                                </div>
                            </form>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </header>
</div>
</template>

<script>
 
 
 
export default {

  layout :'app-admin',
  name: 'IndexPage',
  data: () => ({

  }),
 
}
</script>
