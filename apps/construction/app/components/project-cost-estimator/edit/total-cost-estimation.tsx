function TotalCostEstimation() {
  return (
    <div className="rounded-t-lg overflow-hidden bg-blue-400 text-white p-6">
      {/* Top section */}
      <div className=" space-y-2">
        {/* Line 1 */}
        <div className="flex justify-between text-white/90">
          <span>Pre-Construction:</span>
          <span>00,00,00.00</span>
        </div>

        {/* Line 2 */}
        <div className="flex justify-between text-white/90">
          <span>Construction:</span>
          <span>00,00,00.00</span>
        </div>

        {/* Dotted Line */}
        <div className="border-t border-dotted border-white/50 my-4" />
        
        {/* Title + Total */}
        <div className="flex justify-between items-center font-bold text-lg">
          <span>Total Project Cost Estimation</span>
          <span>$00,00,00.00</span>
        </div>
      </div>

      {/* Footer bar */}
      <div className="bg-blue-600 h-4 rounded-b-lg" />
    </div>
  );
}

export default TotalCostEstimation;
