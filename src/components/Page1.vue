<template>
    <div>
        <h3>Page 1</h3>
        <div>
        <button class="btn btn-sm btn-primary float-right mb-4" @click="zeroLoginHl()">Toggle Zero Login rows</button>
        <table class="table table-bordered">
            <tbody>
                <tr v-for="user in users" :key="user.id" 
                    :class="user.login_count == 0? zeroLoginClass: null">
                    <td>{{user.id}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.last_login}}</td>
                    <td>{{user.login_count}}</td>
                    <td>{{user.project_count}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
</template>

<script>
    import usersJson from '../users.json';

    export default {
        data: function(){
            return {
                users: usersJson,
                zeroLoginClass: null
            }
        },
        methods: {
            zeroLoginHl: function(){
                this.zeroLoginClass = (this.zeroLoginClass === null)? 'zero-login': null;
            }
        }
    }
</script>
<style scoped>
    >>> .zero-login{
        background-color: red;
        color: white;
    }
</style>
