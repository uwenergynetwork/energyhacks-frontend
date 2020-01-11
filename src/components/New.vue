<template>
    <div id='page' class='pt-5 mx-0'>
        <div class='col-12 pb-5 row mx-0'>
            <div class='col-md-6 col-sm-12'>
                <h1 style='color: white;' class='col-sm-12'> EnergyHacks </h1>
                <h2 style='color: white;' class='col-sm-12 pb-1'> University of Waterloo · June 1 - 2, 2019 </h2>
                <h6 style='color: white;' class='col-sm-12'> Sustainability problems. </h6>
                <h6 style='color: white;' class='col-sm-12'> Forwarding thinking. </h6>
                <h6 style='color: white;' class='col-sm-12 pb-5'> Powerful solutions. </h6>
                <div class='col-12 pt-5 pb-3 row mx-0'>
                    <div style='color: white; font-weight: bold;' class='col-sm-12'> Subscribe to our mailing list to receive important announcements!</div>
                    <div class='w-100 d-none d-md-block'></div>
                </div>
                <div class='col-12 row pb-5 mx-0'>
                    <b-form-input type='email' v-model='email' class='col-md-9 col-sm-12 input-group form-control email' placeholder='Enter your email address'></b-form-input>
                    <button type='button' v-on:click='reverseMessage' class='col-md-3 col-sm-12 input-group btn subscribe'><span style='color: white'>Subscribe</span></button>
                </div>
            </div>
            <div class='col-md-6 col-sm-12' style='text-align: center;'>
                <img src='../assets/img/website/island.svg' style='height:auto; width:50%'>
            </div>
        </div>
        
        <div class='col-12 pt-5 pb-5 row mx-0'>
            <h2 style='color: white;' class='col-12'> An energy first hackathon </h2>
                <div class='row col-12'>
                    <div class='col-md-6 col-sm-12' style='color: white;'>
                        EnergyHacks is different than your regular, run-of-the-mill hackathon. 
                        This hackathon is focused solely around a series of energy-related problems
                        that exist in our world today, how will you solve them?          
                    </div>
                    <div class='col-md-6 col-sm-12 my-auto' style='text-align: center'>
                        <img src='../assets/img/website/earth.svg' style='height:auto; width:50%'>
                    </div>
            </div>
        </div>
        <div class='col-12 pb-5 row mx-0'>
            <h2 style='color: white;' class='col-12'>Register</h2>
             <div class='col-12 p-0 pt-2'>
                <div class='row col-12 justify-content-between'>
                    <div class='col-sm-12 col-md-5 temp'>
                            <div class='col-12 pt-5 pb-4' style='text-align: center'> 
                                <img src='http://i.stack.imgur.com/yZlqh.png' style='height:auto; width:50%'>
                            </div>
                            <div class='col-12 pb-4' style='text-align: center'> Apply to Mentor/Volunteer </div>
                            <div class='col-12' style='text-align: center'> Learn from industry leaders </div>
                            <div class='col-12' style='text-align: center'> Lots of swag </div>
                            <div class='col-12' style='text-align: center'> Be a part of multiple projects </div>
                            <div class='col-12 pb-5' style='text-align: center'> Free Meals </div>
                            <div class='col-12 pb-5' style='text-align: center'>
                                <button type='button' class='btn apply-now'>Apply Now</button>
                            </div>                 
                    </div>
                    <div class='col-sm-12 col-md-5 temp'>
                            <div class='col-12 pt-5 pb-4' style='text-align: center'> 
                                <img src='http://i.stack.imgur.com/yZlqh.png' style='height:auto; width:50%'>
                            </div>
                            <div class='col-12 pb-4' style='text-align: center'> Apply to Participate </div>
                            <div class='col-12' style='text-align: center'> Networking and Q/A sessions </div>
                            <div class='col-12' style='text-align: center'> Swag + Prizes </div>
                            <div class='col-12' style='text-align: center'> Expedited learning and tangible results </div>
                            <div class='col-12 pb-5' style='text-align: center'> Free Meals </div>
                            <div class='col-12 pb-5' style='text-align: center'>
                                <button type='button' class='btn apply-now'>Apply Now</button>
                            </div>                 
                    </div>
                </div>
             </div>
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import axios from 'axios'

export default Vue.extend({
    name: 'new',
    data() {
      return {
        email: ''
      }
    },
    methods: {
        reverseMessage: function () {
            axios.post('https://us-central1-uwenca.cloudfunctions.net/earlySignup',{
                email: this.email
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }
});
</script>


<style scoped>
#page {
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
}

.temp {
    background-color: white;
    border-radius: 20px;
}

.apply-now {
    border-radius: 20px;
    border-color: black;
    border-width: medium;
    width: 100%;
}

.subscribe {
    border-radius: 20px;
    border-color: rgb(253, 239, 239);
    border-width: medium;
    width: 100%;
}

.email {
    background: transparent;
    border-radius: 20px;
    border-width: medium;
}

</style>
