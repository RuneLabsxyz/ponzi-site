<script lang="ts">
	import { cn } from '$lib/utils';
	import { fade, slide } from 'svelte/transition';

	interface RuleSection {
		id: string;
		title: string;
		summary: string;
		details: string;
		example?: string;
	}

	const rules: RuleSection[] = [
		{
			id: 'buy-land',
			title: 'Buy land and set a resale price',
			summary: 'You buy land and set a resale price using any token.',
			details: 'Purchase virtual land plots on the Ponziland grid. When you buy land, you choose which token to price it in (STRK, PAPER, LORDS, etc.) and set your desired resale price. This price determines how much tax you pay daily and signals to other players what you think your land is worth.',
			example: 'Example: You buy a plot and set the price to 100 PAPER tokens. This means anyone can buy your land for 100 PAPER, and your daily tax is calculated based on this price.'
		},
		{
			id: 'daily-tax',
			title: 'Daily tax system',
			summary: 'Each day, you pay a small tax (based on that price) to your eight neighbors.',
			details: 'Every 24 hours, you pay a tax to each of your 8 surrounding neighbors. The tax amount is a percentage of your land\'s set price. This creates a constant flow of tokens between neighbors and incentivizes strategic pricing - set it too high and you pay more tax, too low and you miss potential profits.',
			example: 'Example: If your land is priced at 1000 STRK and the tax rate is 1%, you pay 10 STRK daily, split among your 8 neighbors (1.25 STRK each).'
		},
		{
			id: 'token-pump',
			title: 'Token performance arbitrage',
			summary: "If your neighbors' tokens pump more than yours, you earn — and vice versa.",
			details: `This is where the strategy gets interesting. The tax you pay is in YOUR chosen token, but you receive taxes in your NEIGHBORS' tokens. If their tokens increase in value relative to yours, you profit from the arbitrage. It's a constant game of predicting which tokens will perform better.

The key insight: If Token A is worth $10 and Token B is worth $1, and you price your land at 10 Token B while your neighbor prices at 1 Token A, the dollar value is equal. But if Token B pumps to $2 while Token A stays at $10, you're now paying taxes worth $20 to receive taxes worth $10 - you lose. The opposite scenario means you profit!`,
			example: `Example: You price in PAPER ($0.01), neighbor prices in ETH ($2000). You pay 1000 PAPER daily ($10), they pay 0.005 ETH daily ($10). If PAPER pumps to $0.02, you're paying $20 to receive $10. But if ETH dumps to $1000, you're paying $10 to receive $5 from that neighbor. Multiply this by 8 neighbors with different tokens, and the strategy deepens.`
		},
		{
			id: 'nuke-mechanism',
			title: 'Enforcement through nuking',
			summary: 'Non-paying neighbors can be "nuked" - removing them from their land.',
			details: 'If a neighbor doesn\'t pay their taxes, you have the option to "nuke" their plot. This forcibly removes them from their land, which then becomes available for purchase again. This mechanism ensures the tax system keeps flowing and prevents players from squatting on land without participating in the economy.',
			example: 'Example: Your neighbor hasn\'t paid taxes for 3 days. You can spend resources to nuke their plot, ejecting them and potentially claiming their strategic position for yourself or selling to another player.'
		},
		{
			id: 'multi-token',
			title: 'Multi-token ecosystem',
			summary: 'Each token represents a different "biome" with unique characteristics.',
			details: 'Ponziland supports multiple tokens, each creating its own economic micro-climate. STRK lands might be stable but slow-growing, while PAPER lands are volatile but potentially lucrative. This diversity creates natural neighborhoods where similar strategies cluster, but borders between different token zones become arbitrage hotspots.',
			example: 'Example: The LORDS biome attracts long-term holders, while the EKUBO biome is full of DeFi degens. Positioning your land at the border between these biomes lets you exploit the different trading behaviors and token volatilities.'
		}
	];

	let expandedSections = $state<Set<string>>(new Set());

	function toggleSection(id: string) {
		if (expandedSections.has(id)) {
			expandedSections.delete(id);
			expandedSections = new Set(expandedSections);
		} else {
			expandedSections.add(id);
			expandedSections = new Set(expandedSections);
		}
	}
</script>

<div class="min-h-screen bg-black text-white">
	<div class="container mx-auto px-4 py-16 max-w-4xl">
		<h1 class="font-arcade text-5xl md:text-7xl text-center mb-4 text-yellow-300 tracking-wider">
			GAME RULES
		</h1>
		
		<div class="text-center mb-12 space-y-2">
			<p class="text-xl md:text-2xl text-green-400 font-arcade">The basics are simple:</p>
			<p class="text-lg md:text-xl text-gray-300 italic">Click any rule for detailed explanation</p>
		</div>

		<div class="space-y-6">
			{#each rules as rule}
				<div 
					class="border-2 border-green-500 bg-gray-900 overflow-hidden transition-all duration-300"
					class:border-yellow-400={expandedSections.has(rule.id)}
				>
					<button
						onclick={() => toggleSection(rule.id)}
						class="w-full text-left p-6 hover:bg-gray-800 transition-colors duration-200 group"
					>
						<div class="flex items-center justify-between">
							<h2 class="text-xl md:text-2xl font-arcade text-green-400 group-hover:text-yellow-300 transition-colors">
								{rule.summary}
							</h2>
							<span 
								class={cn(
									"text-3xl font-arcade transition-transform duration-300",
									expandedSections.has(rule.id) ? "rotate-180 text-yellow-400" : "text-green-400"
								)}
							>
								▼
							</span>
						</div>
					</button>
					
					{#if expandedSections.has(rule.id)}
						<div 
							transition:slide={{ duration: 300 }}
							class="px-6 pb-6 space-y-4 border-t-2 border-green-500"
						>
							<p class="text-gray-300 leading-relaxed mt-4">
								{rule.details}
							</p>
							
							{#if rule.example}
								<div class="bg-black border border-yellow-400 p-4 mt-4">
									<p class="text-yellow-400 font-arcade text-sm mb-2">EXAMPLE:</p>
									<p class="text-gray-400 text-sm leading-relaxed">
										{rule.example}
									</p>
								</div>
							{/if}
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<div class="mt-16 text-center space-y-4">
			<h2 class="text-3xl font-arcade text-yellow-300">READY TO PLAY?</h2>
			<p class="text-xl text-gray-300">Master the arbitrage. Dominate your neighbors.</p>
			<a 
				href="https://play.ponzi.land" 
				class="inline-block mt-6 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-arcade text-xl transition-all duration-200 transform hover:scale-105 border-4 border-green-700"
			>
				PLAY NOW →
			</a>
		</div>
		
		<div class="mt-12 text-center">
			<a 
				href="/" 
				class="text-gray-500 hover:text-gray-300 font-arcade transition-colors"
			>
				← BACK TO HOME
			</a>
		</div>
	</div>
</div>

<style>
	:global(html) {
		background-color: black;
	}
</style>