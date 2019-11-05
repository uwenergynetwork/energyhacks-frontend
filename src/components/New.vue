<template>
    <div id="page" class="pt-5 pl-4">
        <div class="col-12 pb-5 row mx-0">
            <h1 style="color: white;" class="col-12"> EnergyHacks </h1>
            <h2 style="color: white;" class="col-12 pb-1"> University of Waterloo · June 1 - 2, 2019 </h2>
            <h6 style="color: white;" class="col-12"> Sustainability problems. </h6>
            <h6 style="color: white;" class="col-12"> Forwarding thinking. </h6>
            <h6 style="color: white;" class="col-12"> Powerful solutions. </h6>
        </div>
        <div class="col-12 pt-5 pb-3 row mx-0">
            <div style="color: white; font-weight: bold;" class="col-5"> Subscribe to our mailing list to receive important announcements!</div>
            <div class="w-100 d-none d-md-block"></div>
        </div>
        <div class="col-12 row pb-5 mx-0">
            <div class="col-4 input-group">
                <input type="text" class="form-control email" placeholder="Enter your email address" aria-label="Email address">
            </div>
            <div class="col-2 input-group p-0">
                <button type="button" class="btn subscribe"><span style="color: white">Subscribe</span></button>
            </div>
        </div>
        <div class="col-12 pt-5 pb-5 row mx-0">
            <h2 style="color: white;" class="col-12"> An energy first hackathon </h2>
            <div class="col-lg-8 mx-auto p-xl-5 p-lg-4">
                <div class="row col-12">
                    <div class="col-xl-6 col-lg-6 col-sm-6 col-6 p-0" style="color: white;">
                        EnergyHacks is different than your regular, run-of-the-mill hackathon. 
                        This hackathon is focused solely around a series of energy-related problems
                        that exist in our world today, how will you solve them?          
                    </div>
                    <div class="col-xl-6 col-lg-6 col-sm-6 col-6" style="text-align: center"> 
                        <img src="http://i.stack.imgur.com/yZlqh.png" style="height:auto; width:50%">
                    </div>

                </div>
            </div>
        </div>
        <div class="col-12 pb-5 row mx-0">
            <h2 style="color: white;" class="col-12">Register</h2>
             <div class="col-lg-8 pt-2 p-xl-5 p-lg-4">
                <div class="row col-12">
                    <div class="col-xl-3 col-lg-4 col-sm-5 col-6 p-2 temp">
                            <div class="col-12 pt-5 pb-4" style="text-align: center"> 
                                <img src="http://i.stack.imgur.com/yZlqh.png" style="height:auto; width:50%">
                            </div>
                            <div class="col-12 pb-4" style="text-align: center"> Apply to Mentor/Volunteer </div>
                            <div class="col-12" style="text-align: center"> Learn from industry leaders </div>
                            <div class="col-12" style="text-align: center"> Lots of swag </div>
                            <div class="col-12" style="text-align: center"> Be a part of multiple projects </div>
                            <div class="col-12 pb-5" style="text-align: center"> Free Meals </div>
                            <div class="col-12 pb-5" style="text-align: center">
                                <button type="button" class="btn apply-now">Apply Now</button>
                            </div>                 
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-5 col-6 p-2 mx-auto temp">
                            <div class="col-12 pt-5 pb-4" style="text-align: center"> 
                                <img src="http://i.stack.imgur.com/yZlqh.png" style="height:auto; width:50%">
                            </div>
                            <div class="col-12 pb-4" style="text-align: center"> Apply to Participate </div>
                            <div class="col-12" style="text-align: center"> Networking and Q/A sessions </div>
                            <div class="col-12" style="text-align: center"> Swag + Prizes </div>
                            <div class="col-12" style="text-align: center"> Expedited learning and tangible results </div>
                            <div class="col-12 pb-5" style="text-align: center"> Free Meals </div>
                            <div class="col-12 pb-5" style="text-align: center">
                                <button type="button" class="btn apply-now">Apply Now</button>
                            </div>                 
                    </div>
                </div>
             </div>
        </div>
    </div>
</template>



<script>
export default {
  name: "Main"
};
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
    width: 70%;
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