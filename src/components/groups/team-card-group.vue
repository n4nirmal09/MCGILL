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
					description: 'Steve has over 40 years’ experience in the insurance industry. He started at Bland Payne and Willis Faber before moving to JLT where undertook a variety of leadership roles until he was appointed CEO in 2001. He left JLT for Aon, where most recently he was Group President. He is the founder and CEO of McGill and Partners.',
					thumbnail: require('@/assets/Steve McGill.jpg')
				}, {
					name: 'John Lloyd',
					description: 'John was a founder of Lloyd Thompson in 1981 and undertook numerous senior leadership roles including CEO of Lloyd & Partners and subsequently, JLT Specialty Ltd. Over the last 38 years he played a key role in the development of JLT, helping to take it from a start-up business to one of the world’s leading international insurance brokers. He left JLT in 2018 following its takeover by Marsh & McLennan Companies. He is Chairman of McGill and Partners.',
					thumbnail: require('@/assets/JohnLloyd.jpg')
				}, {
					name: 'Stephen Cross',
					description: 'Stephen has spent over 38 years working in the insurance sector. He worked at International Risk Management Group in the USA for 10 years before moving to Aon in 2001. During his time at Aon he was CEO of Aon Global Risk Consulting, CEO of Aon GRIP and Chief Innovation Officer of the Risk Solutions business. Most recently Stephen was CEO of Everest Insurance (Ireland). He is a founder and Head of Strategy & Innovation at McGill and Partners.',
					thumbnail: require('@/assets/Stephen Cross.jpg')
				},{
					name: 'Denise Garland',
					description: 'Denise started her career at Ernst & Young before moving to Willis where she was Financial Controller for Marine and Integrations Director for UK & Ireland. She then spent 5 years at Man Group, where she became COO of Product and Client Operations. Most recently she was Group COO at Tokio Marine Kiln. She is a founder and COO of McGill and Partners.',
					thumbnail: require('@/assets/Denise Garland.jpg')
				}, {
					name: 'Oliver Corbett',
					description: 'Oliver is a chartered accountant.  He began his career in investment banking with SG Warburg, Phoenix Partnership and DKW. He went on to be Group Finance Director of Novae, CFO of LCH.Clearnet, and most recently CFO of Hyperion.  Oliver was Chairman of the Audit Committee at Rathbones until 2014 and is NED, and Chair of the Audit Committee, at Close Brothers. He is a founder and CFO of McGill and Partners.',
					thumbnail: require('@/assets/Oliver Corbett.jpg')
				}]
			}
		}
	}
</script>