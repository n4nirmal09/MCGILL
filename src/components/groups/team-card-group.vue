<template>
	<div class="team-card-group">
		<div class="row" v-reveal="{
        animation: 'from-bottom-elems-stagger'
    }">
    	<div class="col-6" v-for="(member,n) in teams" :key="member + '-' + n">
    		<team-card :image="member.thumbnail">
					<template slot="name">{{ member.name }}</template>
					<template slot="description">{{ member.description }}</template>
				</team-card>
    	</div>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				teams: [{
					name: 'Steve McGill',
					description: 'Steve has over 40 years’ experience in the insurance industry. He started at Bland Payne and Willis Faber before moving to JLT where undertook a variety of leadership roles until he was appointed CEO in 2001. He left JLT for Aon, where most recently he was Group President. He is the founder, Chairman and CEO of McGill and Partners.',
					thumbnail: require('@/assets/team.png')
				}, {
					name: 'Denise Garland',
					description: 'Denise started her career at Ernst & Young before moving to Willis where she was Financial Controller and Integrations Director. She then spent 5 years at Man Group, where she became COO of Product and Client Operations. Most recently she was Group COO at Tokio Marine Kiln. She is a founder and COO of McGill and Partners.',
					thumbnail: require('@/assets/team.png')
				}, {
					name: 'Stephen Cross',
					description: 'Stephen has spent over 35 years working in the insurance sector. He worked at International Risk Management Group before moving to Aon in 2000. During his 17 years there he was CEO of Aon Global Risk Consulting, CEO of Aon Grip and Chief Innovation Officer. Most recently Stephen was CEO of Everest Insurance (Ireland). He is a founder and Head of Strategy & Innovation at McGill and Partners.',
					thumbnail: require('@/assets/team.png')
				}, {
					name: 'Oliver Corbett',
					description: 'Oliver began his career in investment banking with SG Warburg, Phoenix and DKW. He went on to be Group Finance Director of Novae, CFO of LCH.Clearnet, and most recently CFO of Hyperion. Oliver was Chairman of the Audit Committee at Rathbones until 2014 and is and NED, and Chair of the Audit Committee at Close Brothers. He is a founder and CFO of McGill and Partners.',
					thumbnail: require('@/assets/team.png')
				}]
			}
		}
	}
</script>