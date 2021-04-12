<template>
<div class="team">
    <h1 class="subheading grey--text">team</h1>

    <v-container class="my-5">

        <v-row>
            <v-col cols="12" xs="12" sm="6" md="4" lg="3" v-for="(person, i) in team" :key="i">
                <v-card flat class="text-center ma-3">
                    <v-responsive class="pd-3">
                        <v-avatar color="grey lighten-2" size="100">
                            <v-img :src="person.avatar"></v-img>
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="subheading">{{ person.name }}</div>
                        <div class="grey--text">{{ person.role }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn plain>
                            <v-icon small left>mdi-message-text</v-icon>
                            <span>Message</span>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            team: [
                { name: 'The Net Ninja', role: 'Web developer', avatar:'/avatar-1.png' },
                { name: 'Ryu', role: 'Graphic designer', avatar:'/avatar-2.png' },
                { name: 'Chun Li', role: 'Web developer', avatar:'/avatar-3.png' },
                { name: 'Gouken', role: 'Social media maverick', avatar:'/avatar-4.png' },
                { name: 'Yoshi', role: 'Sales guru', avatar:'/avatar-5.png'}
            ]
        };
    }
}
</script>

<style>

</style>