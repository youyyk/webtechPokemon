<template>
    <div>
        <h1>LOG IN</h1>
        <form @submit.prevent="login"> <!--ไม่ให้ส่งทันที-->
            <div>
                <label for="email">Email</label>
                <input v-model="form.email" type="text" placeholder="email" autocomplete="off"> <!--ไม่ให้ขึ้นที่เคยพิม-->
            </div>

            <div>
                <label for="password">Password</label>
                <input v-model="form.password" type="password" autocomplete="off">
            </div>

            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
</template>

<script>
import AuthService from "@/services/AuthService"
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        async login() {
            let res = await AuthService.login(this.form)
            if (res.success) {
                this.$swal("Login Success", `Welcome, ${res.user.username}`, "success")
                this.$router.push('/pokedex')
            }
            else {
                this.$swal("Login Failed", res.message, "error")
            }
        },
    }

}
</script>

<style>

</style>