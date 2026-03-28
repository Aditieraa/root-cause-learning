import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { concepts, graphLinks } from '@/data/mockData';

interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  status: 'mastered' | 'weak' | 'missing';
  accuracy: number;
}

interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
}

export default function ConceptGraph() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = svgRef.current.clientWidth;
    const height = 400;

    svg.attr('viewBox', `0 0 ${width} ${height}`);

    const nodes: GraphNode[] = concepts.map((c) => ({ ...c }));
    const links: GraphLink[] = graphLinks.map((l) => ({ ...l }));

    const statusColor = (s: string) =>
      s === 'mastered' ? 'hsl(152, 60%, 40%)' : s === 'weak' ? 'hsl(38, 80%, 55%)' : 'hsl(0, 72%, 55%)';

    const simulation = d3
      .forceSimulation(nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink>(links).id((d) => d.id).distance(100))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide(40));

    // Arrow marker
    svg.append('defs').append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 28)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', 'hsl(150, 10%, 60%)');

    const link = svg.append('g')
      .selectAll('line')
      .data(links)
      .join('line')
      .attr('stroke', 'hsl(150, 10%, 75%)')
      .attr('stroke-width', 2)
      .attr('marker-end', 'url(#arrow)');

    const nodeGroup = svg.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .call(d3.drag<SVGGElement, GraphNode>()
        .on('start', (event, d) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x; d.fy = d.y;
        })
        .on('drag', (event, d) => { d.fx = event.x; d.fy = event.y; })
        .on('end', (event, d) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null; d.fy = null;
        })
      );

    nodeGroup.append('circle')
      .attr('r', 22)
      .attr('fill', (d) => statusColor(d.status))
      .attr('stroke', 'hsl(0, 0%, 100%)')
      .attr('stroke-width', 3)
      .style('cursor', 'grab')
      .style('filter', 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))');

    nodeGroup.append('text')
      .text((d) => d.name)
      .attr('text-anchor', 'middle')
      .attr('dy', 38)
      .attr('font-size', '11px')
      .attr('font-weight', '600')
      .attr('fill', 'hsl(150, 30%, 10%)');

    nodeGroup.append('text')
      .text((d) => `${d.accuracy}%`)
      .attr('text-anchor', 'middle')
      .attr('dy', 4)
      .attr('font-size', '10px')
      .attr('font-weight', '700')
      .attr('fill', 'white');

    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      nodeGroup.attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });

    return () => { simulation.stop(); };
  }, []);

  return (
    <div className="card-elevated p-4 overflow-hidden">
      <h3 className="font-display text-lg font-semibold mb-3">Concept Dependency Map</h3>
      <div className="flex gap-4 mb-3 text-xs">
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-success" /> Mastered</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-warning" /> Weak</span>
        <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-danger" /> Missing</span>
      </div>
      <svg ref={svgRef} className="w-full" style={{ height: 400 }} />
    </div>
  );
}
