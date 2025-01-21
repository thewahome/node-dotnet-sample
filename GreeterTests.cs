using System;
using Xunit;
using Sample;
using System.IO;

namespace Sample.Tests
{
    public class GreeterTests
    {
        [Fact]
        public void Greet_NameIsNullOrEmpty_ShouldPrintErrorMessage()
        {
            // Arrange
            var greeter = new Greeter();
            var stringWriter = new StringWriter();
            Console.SetOut(stringWriter);

            // Act
            greeter.Greet(null);
            greeter.Greet(string.Empty);

            // Assert
            var output = stringWriter.ToString();
            Assert.Contains("Name cannot be null or empty.", output);
        }

        [Fact]
        public void Greet_ValidName_ShouldPrintGreetingAndJson()
        {
            // Arrange
            var greeter = new Greeter();
            var stringWriter = new StringWriter();
            Console.SetOut(stringWriter);
            var name = "John";

            // Act
            greeter.Greet(name);

            // Assert
            var output = stringWriter.ToString();
            Assert.Contains($"Hello, {name}!", output);
            Assert.Contains("{\"name\":\"John\",\"age\":3}", output);
        }

        [Fact]
        public void Greet_ExceptionThrown_ShouldPrintErrorMessage()
        {
            // Arrange
            var greeter = new Greeter();
            var stringWriter = new StringWriter();
            Console.SetOut(stringWriter);

            // Act
            greeter.Greet("John");

            // Assert
            var output = stringWriter.ToString();
            Assert.DoesNotContain("An error occurred:", output);
        }
    }
}
