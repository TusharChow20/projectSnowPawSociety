import { ArrowUpDown, Filter } from "lucide-react";
import { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import HomeCart from "./Home/HomeCart";

const Service = () => {
  const { data } = useLoaderData();
  const [sortBy, setSortBy] = useState("default");
  const [filterCategory, setFilterCategory] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  // Extract unique categories from data
  const categories = useMemo(() => {
    const cats = new Set(data.map((item) => item.category).filter(Boolean));
    return ["all", ...Array.from(cats)];
  }, [data]);

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let result = [...data];

    // Apply category filter
    if (filterCategory !== "all") {
      result = result.filter((item) => item.category === filterCategory);
    }

    // Apply price range filter
    if (priceRange !== "all") {
      result = result.filter((item) => {
        const price = parseFloat(item.price);
        switch (priceRange) {
          case "low":
            return price < 50;
          case "medium":
            return price >= 50 && price < 100;
          case "high":
            return price >= 100;
          default:
            return true;
        }
      });
    }

    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case "price-high":
        result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case "rating-high":
        result.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
        break;
      case "rating-low":
        result.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating));
        break;
      case "name":
        result.sort((a, b) => a.serviceName.localeCompare(b.serviceName));
        break;
      default:
        break;
    }

    return result;
  }, [data, sortBy, filterCategory, priceRange]);

  return (
    <div className=" mb-10">
      <div className="mt-12 mb-8 bg-base-200 p-6 rounded-2xl shadow-lg">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-primary" />
            <h3 className="font-bold text-lg">Filter & Sort</h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="form-control w-full sm:w-48">
              <label className="label">
                <span className="label-text font-semibold">Category</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "All Categories" : cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full sm:w-48">
              <label className="label">
                <span className="label-text font-semibold">Price Range</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option value="all">All Prices</option>
                <option value="low">Under $50</option>
                <option value="medium">$50 - $100</option>
                <option value="high">Over $100</option>
              </select>
            </div>
            <div className="form-control w-full sm:w-48">
              <label className="label">
                <span className="label-text font-semibold flex items-center gap-1">
                  <ArrowUpDown className="w-4 h-4" />
                  Sort By
                </span>
              </label>
              <select
                className="select select-bordered w-full"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating-high">Rating: High to Low</option>
                <option value="rating-low">Rating: Low to High</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>
        </div>
        {(filterCategory !== "all" ||
          priceRange !== "all" ||
          sortBy !== "default") && (
          <div className="mt-4 flex flex-wrap gap-2 items-center">
            <span className="text-sm font-semibold">Active:</span>
            {filterCategory !== "all" && (
              <span className="badge badge-primary gap-2">
                {filterCategory}
                <button
                  onClick={() => setFilterCategory("all")}
                  className="text-xs"
                >
                  ×
                </button>
              </span>
            )}
            {priceRange !== "all" && (
              <span className="badge badge-secondary gap-2">
                {priceRange === "low"
                  ? "< $50"
                  : priceRange === "medium"
                  ? "$50-$100"
                  : "> $100"}
                <button
                  onClick={() => setPriceRange("all")}
                  className="text-xs"
                >
                  ×
                </button>
              </span>
            )}
            {sortBy !== "default" && (
              <span className="badge badge-accent gap-2">
                Sort: {sortBy}
                <button
                  onClick={() => setSortBy("default")}
                  className="text-xs"
                >
                  ×
                </button>
              </span>
            )}
            <button
              onClick={() => {
                setFilterCategory("all");
                setPriceRange("all");
                setSortBy("default");
              }}
              className="text-sm text-error hover:underline ml-2"
            >
              Clear All
            </button>
          </div>
        )}
      </div>
      <div className="mb-4 text-sm text-base-content/70">
        Showing {filteredAndSortedData.length} of {data.length} services
      </div>
      {filteredAndSortedData.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-4">
          {filteredAndSortedData.map((eachData) => (
            <HomeCart key={eachData.serviceId} eachData={eachData} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-base-content/70">
            No services found matching your criteria.
          </p>
          <button
            onClick={() => {
              setFilterCategory("all");
              setPriceRange("all");
              setSortBy("default");
            }}
            className="btn btn-primary mt-4"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Service;
