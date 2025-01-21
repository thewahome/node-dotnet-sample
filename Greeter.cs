using Newtonsoft.Json;

namespace Sample
{
	public class Greeter
	{
		public void Greet(string name)
		{
			if (string.IsNullOrEmpty(name))
			{
				Console.WriteLine("Name cannot be null or empty.");
				return;
			}

			try
			{
				var json = JsonConvert.SerializeObject(new { name, age = 3 });
				Console.WriteLine(json);
				Console.WriteLine($"Hello, {name}!");
			}
			catch (Exception ex)
			{
				Console.WriteLine($"An error occurred: {ex.Message}");
			}
		}
	}
}